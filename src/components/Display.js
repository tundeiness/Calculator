import React from 'react';


class Display extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
  }
  render(){
    return(
      <div class="calculator__display">
      {this.props.value}
      </div>
    );
  }
}

export default Display;
