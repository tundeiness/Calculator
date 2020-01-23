
import operate from './operate';

function Calculate(dataInput, buttonName) {
  let { total, next, operation } = dataInput;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
    operation = buttonName;
    return total;
  } if (buttonName === 'AC') {
    total = 0;
    return total;
  } if (buttonName === '.' && next !== false) {
    total = [total, '.', next].join('');
    return total;
  }
  const res = operate(total, next, operation);
  return res;
}

export default Calculate;
