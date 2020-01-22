
/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */

import React from 'react';
import { PropTypes } from 'prop-types';
// import Button from './ButtonPanel';


// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
//   width: '2rem',
// };


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
  } else {
    styling = 'tierOne';
  }

  return (
    <button type="button" className={styling}>{name}</button>
  );
};

// style={{ color: '#FBAB7E' }} style={{backgroundColor: "lightblue"}}

// color: #d9d9d9;

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
