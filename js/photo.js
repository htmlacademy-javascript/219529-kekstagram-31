import {clearComments} from './comments.js';

const photoElement = document.querySelector('.big-picture');
const closeButton = photoElement.querySelector('#picture-cancel');

const openPhoto = () => {
  photoElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', documentKeydownHandler);
};

const closePhoto = () => {
  clearComments();
  photoElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

const renderPhoto = ({url, description, likes}) => {
  const imageElement = photoElement.querySelector('.big-picture__img img');
  const likesCountElement = photoElement.querySelector('.likes-count');
  const descriptionElement = photoElement.querySelector('.social__caption');

  imageElement.src = url;
  imageElement.alt = description;

  likesCountElement.textContent = likes;
  descriptionElement.textContent = description;

  closeButton.addEventListener('click', closeButtonClickHandler);
};

function documentKeydownHandler (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhoto();
  }
}

function closeButtonClickHandler (evt) {
  evt.preventDefault();
  closePhoto();
}

export {openPhoto, renderPhoto};
