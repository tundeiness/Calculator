/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      colour: '#FBAB7E',
      wide:false
  	}
  	this.updateColour = this.updateColour.bind(this);
  }

  updateColour() {
  	this.setState({
  		colour: 'red'
  	});
  }

  isWide() {
  	this.setState({
  		wide: true
  	});
  }

  render() {
    return (
      <Button color = {this.state.colour} updateColour={this.updateColour} onClick={this.onClick} />
    );
  }
}

export default ButtonPanel;
