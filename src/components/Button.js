/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable space-before-blocks */
import React from 'react';


const Button = () => (
  <div className="calculator_button">
    <div className="groupOne">
      <button name="AC" className="tierOne" id="clear">AC</button>
      <button name="+/-" className="tierOne" id="plus_minus">+/-</button>
      <button name="%" className="tierOne" id="percent">%</button>
      <button name="/" className="key--operator" id="divide">÷</button>
    </div>
    <div className="groupTwo">
      <button name="7" className="tierOne">7</button>
      <button name="8" className="tierOne">8</button>
      <button name="9" className="tierOne">9</button>
      <button name="x" className="key--operator" id="multiply">&times;</button>
    </div>
    <div className="groupThree">
      <button name="4" className="tierOne">4</button>
      <button name="5" className="tierOne">5</button>
      <button name="6" className="tierOne">6</button>
      <button name="-" className="key--operator" id="minus">-</button>
    </div>
    <div className="groupFour">
      <button name="1" className="tierOne">1</button>
      <button name="2" className="tierOne">2</button>
      <button name="3" className="tierOne">3</button>
      <button name="+" className="key--operator" id="plus">+</button>
    </div>
    <div className="groupFive">
      <button name="0" className="tierTwo">0</button>
      <button name="." className="tierOne" data-action="decimal">.</button>
      <button name="=" className="key--equal" id="calculate">=</button>
    </div>
  </div>
);

export default Button;
