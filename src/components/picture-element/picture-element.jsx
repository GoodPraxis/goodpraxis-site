import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

import './picture-element.scss';

class PictureElement extends React.Component {
  constructor(props) {
    super(props);
    this.src = props.src;
    this.alt = props.alt;

    this.state = {
      visible: false,
    };
  }

  onChange(visible) {
    this.setState({ visible });
  }

  render() {
    const { visible } = this.state;
    return (
      <VisibilitySensor
        onChange={state => this.onChange(state)}
        partialVisibility
      >
        <div className={`picture-element${visible ? ' is-visible' : ''}`}>
          <img src={this.src} alt={this.alt} />
        </div>
      </VisibilitySensor>
    );
  }
}

PictureElement.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

PictureElement.defaultProps = {
  src: '',
  alt: '',
};

export default PictureElement;
