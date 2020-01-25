
import React from 'react';
import { PropTypes } from 'prop-types';
import Button from './Button';


const ButtonPanel = (props) => {
  const { clickHandler } = props;
  // const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <div className="calculator_button">
      <div className="groupOne">
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="AC" name="AC" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="+/-" name="+/-" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="%" name="%" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="/" name="÷" className="key--operator" id="divide" />
      </div>
      <div className="groupTwo">
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="7" name="7" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="8" name="8" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="9" name="9" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="x" name="x" className="key--operator" id="multiply" />
      </div>
      <div className="groupThree">
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="4" name="4" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="5" name="5" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="6" name="6" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="-" name="-" className="key--operator" id="minus" />
      </div>
      <div className="groupFour">
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="1" name="1" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="2" name="2" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="3" name="3" className="tierOne" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="+" name="+" className="key--operator" id="plus" />
      </div>
      <div className="groupFive">
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="0" name="0" className="tierOne" wide />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="." name="." className="tierOne" data-action="decimal" />
        <Button handleClick={(buttonName) => clickHandler(buttonName)} aria-label="=" name="=" className="key--equal" id="calculate" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: () => {},
};


export default ButtonPanel;
