import React from 'react';


class Display extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     value: 0
  //   }
  // }
  render(){
    return(
      <div class="calculator__display">
        {/* <p>{this.props.value}</p> */}
        <p>{this.props.childDisplay}</p>
      </div>
    );
  }
}

export default Display;
