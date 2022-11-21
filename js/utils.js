//функция вывода случайного числа
const randomInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//функция проверки длины строки
const checkStringLimit = (string, limit) => {
  const length = string.length;

  if (length > limit) {
    return 'превышен допустимый лимит строки';
  }

  return length;
};

checkStringLimit('Word', 11);

//функция проверки нажатия на 'Escape'
const isEscapeKey = (evt) => evt.key === 'Escape';

export {randomInteger, isEscapeKey};
