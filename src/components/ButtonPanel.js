/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */

import React from 'react';
import { PropTypes } from 'prop-types';
import Button from './Button';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const ButtonPanel = ({ name, color, wide }) => (
  <Button style={styles} color={color} updateColour={this.updateColour} onClick={this.onClick}>{name}</Button>
);


ButtonPanel.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

ButtonPanel.defaultProps = {
  name: 'name',
  color: '#FBAB7E',
  wide: false,
};


export default ButtonPanel;
