
import React from 'react';
import { PropTypes } from 'prop-types';


const Button = (props) => {
  const {
    name, color, wide, handleClick,
  } = props;


  let styling = 'tierOne';
  const styles = {
    backgroundColor: '#FBAB7E',
    width: '24.9%',
    height: '100px',
    border: '1px solid gray',
    backgroundImage: 'linear-gradient(315deg, #FBAB7E 0%, #F7CE68 74%)',
    cursor: 'pointer',
  };

  let condit;
  if (name === 'x' || name === '-' || name === '+' || name === '÷' || name === '=') {
    if (color !== '#FBAB7E') {
      condit = <button type="button" onClick={() => handleClick(name)} style={styles}>{name}</button>;
      return condit;
    }
  }


  if (wide === true) {
    styling = 'zero';
  }

  return (
    <button type="button" onClick={() => handleClick(name)} className={styling}>{name}</button>
  );
};


Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#d9d9d9',
  wide: false,
};


export default Button;
