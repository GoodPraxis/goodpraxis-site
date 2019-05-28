const FRAGMENT_SHADER = `precision lowp float;
uniform sampler2D uniTexture;
varying vec2 varUV;

void main() {
  gl_FragColor = texture2D(uniTexture, varUV);
}
`;

const VERTEX_SHADER = `uniform float uniTime;
attribute vec2 attCoords;
varying vec2 varUV;
void main() {
  float x = attCoords.x;
  float y = attCoords.y;
  float d = sin(uniTime / 3.1415);

  float z = 1.0 + .035 * sin(x * 15.0 * d + uniTime / 15.0);

  float h = cos(uniTime + d + x * 5.0);
  h += cos(x * 3.0 - uniTime * .1851);
  y += h * x * .12;

  varUV = attCoords;
  gl_Position = vec4(x * 2.0 - 1.0, .5 - y, .0, z);
}
`;

export { FRAGMENT_SHADER, VERTEX_SHADER };
