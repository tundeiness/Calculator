import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      childDisplay: 0,
    }
  }

  render() {
    return (
      <div className="app-wrapper">
        <Display  childDisplay={this.state.childDisplay}/>
        <ButtonPanel  />
      </div>
    );
  }
}

export default App;
