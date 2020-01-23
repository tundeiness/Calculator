
import React from 'react';
import { PropTypes } from 'prop-types';


const Button = (props) => {
  const { name, color, wide } = props;

  let styling = 'tierOne tierTwo';

  if (color !== '#FBAB7E') {
    styling = 'tierOne';
  } else {
    styling = 'key--operator key--equal';
  }

  if (wide === true) {
    styling = 'tierTwo';
  }

  return (
    <button type="button" className={styling}>{name}</button>
  );
};


Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: '#d9d9d9',
  wide: false,
  name: 'name',
};


export default Button;
