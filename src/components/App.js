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
    const { result } = this.state;
    return (
      <div className="app-wrapper">
        <Display result={result} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
