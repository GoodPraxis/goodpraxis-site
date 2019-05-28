/*
 * Spam prevention tool.
 */
import React from 'react';
import PropTypes from 'prop-types';

const ADDRESS = 'hello@goodpraxis.coop';

class EmailAddress extends React.Component {
  constructor({ label }) {
    super();
    this.label = label;
    this.state = {
      address: '',
    };
  }

  componentDidMount() {
    this.setState({ address: ADDRESS });
  }

  render() {
    const { address } = this.state;
    return <a href={`mailto:${address}`}>{this.label || address}</a>;
  }
}

EmailAddress.propTypes = {
  label: PropTypes.string,
};

EmailAddress.defaultProps = {
  label: '',
};

export default EmailAddress;
