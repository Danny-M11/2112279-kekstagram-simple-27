import './formValidation.js';
import './changeScale.js';
import './changeEffect.js';
import {isEscapeKey} from './utils.js';
import { resetEffects } from './changeEffect.js';
import { resetScale } from './changeScale.js';

const openPhotoSelection = document.querySelector('#upload-file');
const photoEditing = document.querySelector('.img-upload__overlay');
const mainPage = document.querySelector('body');
const modalCloseButton = document.querySelector('.img-upload__cancel');

const onModalEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    photoEditing.classList.add('hidden');
  }
};

const openModal = () => {
  photoEditing.classList.remove('hidden');
  mainPage.classList.add('.modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
};

const closeModal = () => {
  photoEditing.classList.add('hidden');
  mainPage.classList.remove('.modal-open');

  document.removeEventListener('keydown', onModalEscKeydown);

  openPhotoSelection.value = '';
  resetEffects();
  resetScale();
};

openPhotoSelection.addEventListener ('change', openModal);
modalCloseButton.addEventListener('click', closeModal);
