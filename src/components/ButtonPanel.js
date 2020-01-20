/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from './Button';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class ButtonPanel extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      colour: '#FBAB7E',
      wide:false
  	}
  	// this.updateColour = this.updateColour.bind(this);
  }

  componentDidMount(){
    this.updateColour();
    this.isWide();
  }

  // updateClock() {
  //   this.timerId = setTimeout(() => {
  //     this.setState({
  //       time: new Date()
  //     // reset the timeout after state updates
  //     }, this.updateClock)
  //   }, 1000)
  // }

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
      <Button style={styles} color = {this.state.colour} updateColour={this.updateColour} onClick={this.onClick} />
    );
  }
}

export default ButtonPanel;
