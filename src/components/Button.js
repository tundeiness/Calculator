import React from 'react';


function Button(props){
    return(
      <div className="calculator_button">
        <div className="groupOne">
          <button name='AC' onClick={e=> props.onClick(e.target.name)} className="tierOne" data-action="clear">AC</button>
          <button name='+/-' onClick={e=> props.onClick(e.target.name)} className="tierOne" data-action="plus_minus">+/-</button>
          <button name='%' onClick={e=> props.onClick(e.target.name)} className="tierOne" data-action="percent">%</button>
          <button name='/' onClick={e=> props.onClick(e.target.name)} className="key--operator" data-action="divide">÷</button>
        </div>
        <div className="groupTwo">
          <button name='7' onClick={e=> props.onClick(e.target.name)} className="tierOne">7</button>
          <button name='8' onClick={e=> props.onClick(e.target.name)} className="tierOne">8</button>
          <button name='9' onClick={e=> props.onClick(e.target.name)} className="tierOne">9</button>
          <button name='x' onClick={e=> props.onClick(e.target.name)} className="key--operator" data-action="multiply">&times;</button>
        </div>
        <div className="groupThree">
          <button name='4' onClick={e=> props.onClick(e.target.name)} className="tierOne">4</button>
          <button name='5' onClick={e=> props.onClick(e.target.name)} className="tierOne">5</button>
          <button name='6' onClick={e=> props.onClick(e.target.name)} className="tierOne">6</button>
          <button name='-' onClick={e=> props.onClick(e.target.name)} className="key--operator" data-action="minus">-</button>
        </div>
        <div className="groupFour">
          <button name='1' onClick={e=> props.onClick(e.target.name)} className="tierOne">1</button>
          <button name='2' onClick={e=> props.onClick(e.target.name)} className="tierOne">2</button>
          <button name='3' onClick={e=> props.onClick(e.target.name)} className="tierOne">3</button>
          <button name='+' onClick={e=> props.onClick(e.target.name)} className="key--operator" data-action="plus">+</button>
        </div>
        <div className="groupFive">
          <button name='0' onClick={e=> props.onClick(e.target.name)} className="tierTwo">0</button>
          <button name='.' onClick={e=> props.onClick(e.target.name)} className="tierOne" data-action="decimal">.</button>
          <button name='=' onClick={e=> props.onClick(e.target.name)} className="key--equal" data-action="calculate">=</button>
        </div>
      </div>
    );
}

export default Button;
