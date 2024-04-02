import {clearComments} from './comments.js';
import {closeModal, openModal} from './modal.js';

const photoElement = document.querySelector('.big-picture');
const closeButtonElement = photoElement.querySelector('#picture-cancel');

const openPhoto = () => {
  openModal(photoElement);
  document.addEventListener('keydown', documentKeydownHandler);
};

const closePhoto = () => {
  closeModal(photoElement);
  clearComments();
  document.removeEventListener('keydown', documentKeydownHandler);
  closeButtonElement.removeEventListener('click', closeButtonClickHandler);
};

function closeButtonClickHandler (evt) {
  evt.preventDefault();
  closePhoto();
}

function documentKeydownHandler (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhoto();
  }
}

const renderPhoto = ({url, description, likes}) => {
  const imageElement = photoElement.querySelector('.big-picture__img img');
  const likesCountElement = photoElement.querySelector('.likes-count');
  const descriptionElement = photoElement.querySelector('.social__caption');

  imageElement.src = url;
  imageElement.alt = description;

  likesCountElement.textContent = likes;
  descriptionElement.textContent = description;

  closeButtonElement.addEventListener('click', closeButtonClickHandler);
};

export {openPhoto, renderPhoto, photoElement};
