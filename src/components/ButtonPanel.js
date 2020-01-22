/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */

import React from 'react';
import Button from './Button';
import { PropTypes } from 'prop-types';



const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const ButtonPanel = ({name, color, wide}) =>{

  render() {
    const { color } = this.state;
    // const { wide } = this.state;
    return (
      <Button style={styles} color={color} updateColour={this.updateColour} onClick={this.onClick}>{name}</Button>
    );
  }

}


ButtonPanel.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
}

ButtonPanel.defaultProps = {
  name: 'name',
  color: '#FBAB7E',
  wide:false
}



export default ButtonPanel;
