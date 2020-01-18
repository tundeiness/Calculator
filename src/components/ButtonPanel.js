import React from 'react';
import Button from './Button';


class ButtonPanel extends React.Component{
  render(){
    return(
      // <div class="button_wrapper">
        <Button onClick={this.onClick}/>
      // </div>
    );
  }
}

export default ButtonPanel;
