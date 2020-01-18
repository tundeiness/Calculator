import React from 'react';


class Display extends React.Component{
  render(){
    return(
      <div class="calculator__display">
        <p>{this.props.childDisplay}</p>
      </div>
    );
  }
}

export default Display;
