/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';


class Display extends React.Component {
  render() {
    return (
      <div className="calculator__display">
        <p>{this.props.childDisplay}</p>
      </div>
    );
  }
}

export default Display;
