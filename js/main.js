//программа вывода случайного числа
function randomInteger(min, max) {
  if (max === min || min < 0 || max < 0) {
    return NaN;
  }

  const rand = Math.random() * (max - min + 1) + min;
  return Math.floor(rand);
}

randomInteger(15.2, 39.8);

//https://learn.javascript.ru/task/random-int-min-max (ссылка на источник)

//программа проверки длины строки
function checkStringLimit (string, limit) {
  const length = string.length;

  if (length > limit) {
    return 'превышен допустимый лимит строки';
  }

  return length;
}

checkStringLimit('Слово', 10);
