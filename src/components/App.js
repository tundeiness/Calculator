/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
  }

  render() {
    return (
      <div className="app-wrapper">
        <Display result={this.state.result} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
