/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		colour: '#FBAB7E'
  	}
  	this.updateColour = this.updateColour.bind(this);
  }

  updateColour() {
  	this.setState({
  		colour: 'red'
  	});
  }
  render() {
    return (
      <Button color = {this.state.colour} updateColour={this.updateColour} onClick={this.onClick} />
    );
  }
}

export default ButtonPanel;
