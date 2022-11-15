import {createPosts} from './data.js';

//находим блок куда будем вставлять и шаблон
const PhotoTape = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const userPosts = createPosts();

//создаём фрагмент куда добавим все элементы
const userPostsFragment = document.createDocumentFragment();

//пробегаемся по массиву рандомных элементов и вносим их значения в шаблон, а шаблон в фрагмент
userPosts.forEach(({url, likes, comment}) => {
  const postElement = pictureTemplate.cloneNode(true);
  postElement.querySelector('.picture__img').src = url;
  postElement.querySelector('.picture__likes').textContent = likes;
  postElement.querySelector('.picture__comments').textContent = comment;
  userPostsFragment.appendChild(postElement);
});

//добавляем фрагмент на страницу
PhotoTape.appendChild(userPostsFragment);
