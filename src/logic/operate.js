
import Big from 'big-js';

const operate = (numOne, numTwo, operation) => {
  const first = numOne ? Big(numOne) : null;
  const second = numTwo ? Big(numTwo) : null;


  if (operation === '-') {
    return first.minus(second).toString();
  }

  if (operation === '+') {
    return first.plus(second).toString();
  }

  if (operation === 'x') {
    return first.times(second).toString();
  }

  if (operation === '÷') {
    if (second === 0) {
      return "Division by 0 isn't permissible";
    }
    return first.div(second).toString();
  }

  if (operation === '%') {
    return first.div(100).toString();
  }
  return 'not permitted';
};

export default operate;
