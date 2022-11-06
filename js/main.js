//программа вывода случайного числа
const randomInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

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

// программа создаёт массив из 25 рандомно сгенерированных объектов

const PostDescription = [
  'Как вам мой лук?',
  'Мыслями на пляже',
  'А вы пробовали?',
  'Где вы мечтаете побывать?',
  'Любимая цитата?',
  'Не сижу на месте',
  'Лучше один раз увидеть',
  'Суббота и новые впечатления',
  'Но сначала селфи',
  'Какой смысл придашь каждому дню – так его и проживешь'
];

let personalNumber = 0;

const createPost = () => {
  personalNumber += 1;

  const postInfo = {
    id: personalNumber,
    url: `photos/${personalNumber}.jpg`,
    description: PostDescription[randomInteger(0, PostDescription.length - 1)],
    likes: randomInteger(15, 200),
    comment: randomInteger(0, 200)
  };
  return postInfo;

};

const createPosts = (length = 25) => Array.from({length}, createPost);

createPosts();
