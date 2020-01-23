
import React from 'react';
import Button from './Button';


const ButtonPanel = () => (
  <div className="calculator_button">
    <div className="groupOne">
      <Button aria-label="AC" name="AC" className="tierOne" color="#d9d9d9" />
      <Button aria-label="+/-" name="+/-" className="tierOne" color="#d9d9d9" />
      <Button aria-label="%" name="%" className="tierOne" color="#d9d9d9" />
      <Button aria-label="/" name="÷" className="key--operator" />
    </div>
    <div className="groupTwo">
      <Button aria-label="7" name="7" className="tierOne" color="#d9d9d9" />
      <Button aria-label="8" name="8" className="tierOne" color="#d9d9d9" />
      <Button aria-label="9" name="9" className="tierOne" color="#d9d9d9" />
      <Button aria-label="x" name="x" className="key--operator" id="multiply" />
    </div>
    <div className="groupThree">
      <Button aria-label="4" name="4" className="tierOne" color="#d9d9d9" />
      <Button aria-label="5" name="5" className="tierOne" color="#d9d9d9" />
      <Button aria-label="6" name="6" className="tierOne" color="#d9d9d9" />
      <Button aria-label="-" name="-" className="key--operator" id="minus" />
    </div>
    <div className="groupFour">
      <Button aria-label="1" name="1" className="tierOne" color="#d9d9d9" />
      <Button aria-label="2" name="2" className="tierOne" color="#d9d9d9" />
      <Button aria-label="3" name="3" className="tierOne" color="#d9d9d9" />
      <Button aria-label="+" name="+" className="key--operator" id="plus" />
    </div>
    <div className="groupFive">
      <Button aria-label="0" name="0" className="tierOne" color="#d9d9d9" wide />
      <Button aria-label="." name="." className="tierOne" data-action="decimal" color="#d9d9d9" />
      <Button aria-label="=" name="=" className="key--equal" id="calculate" />
    </div>
  </div>
);


export default ButtonPanel;
