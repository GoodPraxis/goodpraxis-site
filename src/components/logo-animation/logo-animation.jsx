import React from 'react';
import PropTypes from 'prop-types';

import { FRAGMENT_SHADER, VERTEX_SHADER } from './shaders';
import getGrid from '../../helpers/grid-helper';
import StyleVariables from '../../styles/_variables.scss';
import './logo-animation.scss';

const COLUMNS = 500;
const SPEED = 0.006;
const { BYTES_PER_ELEMENT } = new Float32Array();


class LogoAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.src = props.src;
    this.height = parseInt(StyleVariables.LOGO_HEIGHT, 10) || 256;
    this.width = parseInt(StyleVariables.LOGO_WIDTH, 10) || 256;

    this.canvasRef = React.createRef();
    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    this.webgl = this.canvasRef.current.getContext('webgl');

    this.program = this.createProgram();

    this.image = new Image();
    this.image.onload = () => {
      this.vertices = this.createVertices();
      this.texture = this.createTexture();

      requestAnimationFrame(() => this.animate());

      this.setState({ ready: true });
    };

    this.image.src = this.src;
  }

  animate(time) {
    requestAnimationFrame(this.animate.bind(this));
    this.webgl.bindTexture(this.webgl.TEXTURE_2D, this.texture);
    const uniTime = this.webgl.getUniformLocation(this.program, 'uniTime');
    this.webgl.uniform1f(uniTime, time * SPEED);
    const attCoords = this.webgl.getAttribLocation(this.program, 'attCoords');
    this.webgl.enableVertexAttribArray(attCoords);
    this.webgl.vertexAttribPointer(
      attCoords, 2, this.webgl.FLOAT, false, 2 * BYTES_PER_ELEMENT, 0,
    );
    this.webgl.drawArrays(this.webgl.TRIANGLE_STRIP, 0, 2 * COLUMNS);
  }

  createProgram() {
    const program = this.webgl.createProgram();

    const shaderVert = this.webgl.createShader(
      this.webgl.VERTEX_SHADER,
    );
    this.webgl.shaderSource(shaderVert, VERTEX_SHADER);
    this.webgl.compileShader(shaderVert);
    if (!this.webgl.getShaderParameter(shaderVert, this.webgl.COMPILE_STATUS)) {
      throw new Error('Could not compile vertex shader');
    }
    this.webgl.attachShader(program, shaderVert);

    // Fragment shader.
    const shaderFrag = this.webgl.createShader(this.webgl.FRAGMENT_SHADER);
    this.webgl.shaderSource(shaderFrag, FRAGMENT_SHADER);
    this.webgl.compileShader(shaderFrag);
    if (!this.webgl.getShaderParameter(shaderFrag, this.webgl.COMPILE_STATUS)) {
      throw new Error('Could not compile fragment shader');
    }
    this.webgl.attachShader(program, shaderFrag);

    this.webgl.linkProgram(program);

    // Set this program as the default one.
    this.webgl.useProgram(program);

    // Enable blending mode to use a transparent texture.
    this.webgl.blendFunc(this.webgl.SRC_ALPHA, this.webgl.ONE);
    this.webgl.enable(this.webgl.BLEND);
    this.webgl.disable(this.webgl.DEPTH_TEST);

    return program;
  }

  createVertices() {
    const vertices = [];
    let x;
    for (let k = 0; k <= COLUMNS; k += 1) {
      x = k / COLUMNS;
      vertices.push(x, 0, x, 1);
    }

    const buff = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, buff);
    this.webgl.bufferData(
      this.webgl.ARRAY_BUFFER,
      new Float32Array(vertices),
      this.webgl.STATIC_DRAW,
    );

    return vertices;
  }


  createTexture() {
    const texture = this.webgl.createTexture();
    this.webgl.bindTexture(this.webgl.TEXTURE_2D, texture);

    // Set the parameters so we can render any size image.
    this.webgl.texParameteri(
      this.webgl.TEXTURE_2D,
      this.webgl.TEXTURE_WRAP_S,
      this.webgl.CLAMP_TO_EDGE,
    );
    this.webgl.texParameteri(
      this.webgl.TEXTURE_2D,
      this.webgl.TEXTURE_WRAP_T,
      this.webgl.CLAMP_TO_EDGE,
    );
    this.webgl.texParameteri(
      this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.NEAREST,
    );
    this.webgl.texParameteri(
      this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.NEAREST,
    );

    // Upload the image into the texture.
    this.webgl.texImage2D(
      this.webgl.TEXTURE_2D,
      0,
      this.webgl.RGBA,
      this.webgl.RGBA,
      this.webgl.UNSIGNED_BYTE,
      this.image,
    );

    return texture;
  }

  render() {
    const { ready } = this.state;

    return (
      <div className={`logo-animation ${
        getGrid('full', 'one', 'two') + (ready ? ' is-ready' : '')}`}
      >
        <canvas
          width={this.width * 2}
          height={this.height * 2}
          ref={this.canvasRef}
        />
      </div>
    );
  }
}

LogoAnimation.propTypes = {
  src: PropTypes.string,
};

LogoAnimation.defaultProps = {
  src: '',
};

export default LogoAnimation;
