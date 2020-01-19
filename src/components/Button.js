/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable space-before-blocks */
import React from 'react';


const Button = (props) =>{
  return (
    <div className="calculator_button">
      <div className="groupOne">
        <button name="AC" className="tierOne" id="clear" style={{'color': props.colour}} onClick={props.updateColour}>AC</button>
        <button name="+/-" className="tierOne" id="plus_minus"  style={{'color': props.colour}} onClick={props.updateColour}>+/-</button>
        <button name="%" className="tierOne" id="percent"  style={{'color': props.colour}} onClick={props.updateColour}>%</button>
        <button name="/" className="key--operator" id="divide"  style={{'color': props.colour}} onClick={props.updateColour}>÷</button>
      </div>
      <div className="groupTwo">
        <button name="7" className="tierOne"  style={{'color': props.colour}} onClick={props.updateColour}>7</button>
        <button name="8" className="tierOne"  style={{'color': props.colour}} onClick={props.updateColour}>8</button>
        <button name="9" className="tierOne"  style={{'color': props.colour}} onClick={props.updateColour}>9</button>
        <button name="x" className="key--operator" id="multiply"  style={{'color': props.colour}} onClick={props.updateColour}>&times;</button>
      </div>
      <div className="groupThree">
        <button name="4" className="tierOne"  style={{'color': props.colour}} onClick={props.updateColour}>4</button>
        <button name="5" className="tierOne"  style={{'color': props.colour}} onClick={props.updateColour}>5</button>
        <button name="6" className="tierOne"  style={{'color': props.colour}} onClick={props.updateColour}>6</button>
        <button name="-" className="key--operator" id="minus"  style={{'color': props.colour}} onClick={props.updateColour}>-</button>
      </div>
      <div className="groupFour">
        <button name="1" className="tierOne"  style={{'color': props.colour}} onClick={props.updateColour}>1</button>
        <button name="2" className="tierOne"  style={{'color': props.colour}} onClick={props.updateColour}>2</button>
        <button name="3" className="tierOne"  style={{'color': props.colour}} onClick={props.updateColour}>3</button>
        <button name="+" className="key--operator" id="plus"  style={{'color': props.colour}} onClick={props.updateColour}>+</button>
      </div>
      <div className="groupFive">
        <button name="0" className="tierTwo"  style={{'color': props.colour}} onClick={props.updateColour}>0</button>
        <button name="." className="tierOne" style={{'color': props.colour}} onClick={props.updateColour}>.</button>
        <button name="=" className="key--equal" id="calculate"  style={{'color': props.colour}} onClick={props.updateColour}>=</button>
      </div>
    </div>
  );
}

export default Button;
