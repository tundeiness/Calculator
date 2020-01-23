
const Big = require('big.js');

const operate = (numOne, numTwo, operation) => {
  const first = Big(numOne);
  const second = Big(numTwo);

  if (operation === '-') {
    return first.minus(second).toString();
  } if (operation === '+') {
    return first.plus(second).toString();
  } if (operation === 'x') {
    return first.times(second).toString();
  } if (operation === '/') {
    if (second === 0) {
      return "Division by 0 isn't permissible";
    }
    return first.div(second).toString();
  } if (operation === '%') {
    return first.mod(second).toString();
  }
  return 'operation not permitted';
};

export default operate;
