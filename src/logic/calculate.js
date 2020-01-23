
import operate from './operate';

const Calculate = (dataInput, buttonName) => {
  const { total, next, operation } = dataInput;
  let copy = { total, next, operation };


  if (buttonName === '+/-') {
    copy.total *= -1;
    copy.next *= -1;
    copy = { total, next, operation };
    return copy;
  } if (buttonName === 'AC') {
    copy.total = 0;
    return copy.total;
  } if (buttonName === '.' && copy.next !== false) {
    copy.total = [copy.total, '.', copy.next].join('');
    return copy.total;
  }
  const res = operate(copy.total, copy.next, copy.operation);
  return res && copy;
};

export default Calculate;
