
const Big = require('big.js');

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
    try {
      first.div(second);
      return (first.div(second).toString());
    } catch (err) { return 'cannot divide by 0'; }
  }

  if (operation === '%') {
    return first.div(100).toString();
  }
  return 'not permitted';
};

export default operate;
