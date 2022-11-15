import {createPosts} from './data.js';

const PhotoTape = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

const userPosts = createPosts();

const userPostsFragment = document.createDocumentFragment();

userPosts.forEach(({url, likes, comment}) => {
  const postElement = pictureTemplate.cloneNode(true);
  postElement.querySelector('.picture__img').src = url;
  postElement.querySelector('.picture__likes').textContent = likes;
  postElement.querySelector('.picture__comments').textContent = comment;
  userPostsFragment.appendChild(postElement);
});

PhotoTape.appendChild(userPostsFragment);
