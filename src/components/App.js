
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const copyObj = { total, next, operation };
    const result = calculate(copyObj, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    const { total, next } = this.state;
    const res = total || next;
    if (res) {
      return (
        <div className="app-wrapper">
          <Display result={res} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      );
    }
    return (
      <div className="app-wrapper">
        <Display />
        <ButtonPanel clickHandler={(buttonName) => this.handleClick(buttonName)} />
      </div>
    );
  }
}

export default App;
