import React from 'react';


const Button = () => (
  <div className="calculator_button">
    <div className="groupOne">
      <button type="button" aria-label="AC" name="AC" className="tierOne" id="clear" />
      <button type="button" aria-label="+/-" name="+/-" className="tierOne" id="plus_minus" />
      <button type="button" aria-label="%" name="%" className="tierOne" id="percent" />
      <button type="button" aria-label="/" name="/" className="key--operator" id="divide" />
    </div>
    <div className="groupTwo">
      <button type="button" aria-label="7" name="7" className="tierOne" />
      <button type="button" aria-label="8" name="8" className="tierOne" />
      <button type="button" aria-label="9" name="9" className="tierOne" />
      <button type="button" aria-label="x" name="x" className="key--operator" id="multiply" />
    </div>
    <div className="groupThree">
      <button type="button" aria-label="4" name="4" className="tierOne" />
      <button type="button" aria-label="5" name="5" className="tierOne" />
      <button type="button" aria-label="6" name="6" className="tierOne" />
      <button type="button" aria-label="-" name="-" className="key--operator" id="minus" />
    </div>
    <div className="groupFour">
      <button type="button" aria-label="1" name="1" className="tierOne" />
      <button type="button" aria-label="2" name="2" className="tierOne" />
      <button type="button" aria-label="3" name="3" className="tierOne" />
      <button type="button" aria-label="+" name="+" className="key--operator" id="plus" />
    </div>
    <div className="groupFive">
      <button type="button" aria-label="0" name="0" className="tierTwo" />
      <button type="button" aria-label="." name="." className="tierOne" data-action="decimal" />
      <button type="button" aria-label="=" name="=" className="key--equal" id="calculate" />
    </div>
  </div>
);

export default Button;
