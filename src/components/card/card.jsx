import React from 'react';
import PropTypes from 'prop-types';

import './card.scss';

const CardType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

const Card = ({ children, type }) => (
  <div className={`card-component -${type} grid-full-sm grid-two-lg`}>
    <div className="content">{children}</div>
  </div>
);

Card.propTypes = {
  type: PropTypes.oneOf(Object.values(CardType)),
  children: PropTypes.node,
};

Card.defaultProps = {
  type: CardType.PRIMARY,
  children: null,
};

export default Card;
