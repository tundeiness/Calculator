
import React from 'react';
import Button from './Button';


class ButtonPanel extends React.Component {
  render() {
    return (
      <Button onClick={this.onClick} />
    );
  }
}


export default ButtonPanel;
