// программа создаёт массив из 25 рандомно сгенерированных объектов
import {randomInteger} from './utils.js';

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

export {createPosts};
