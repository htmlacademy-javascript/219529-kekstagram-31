import {openModal} from './modal.js';

const photoElement = document.querySelector('.big-picture');

const openPhoto = () => {
  openModal(photoElement);
};

const renderPhoto = ({url, description, likes}) => {
  const imageElement = photoElement.querySelector('.big-picture__img img');
  const likesCountElement = photoElement.querySelector('.likes-count');
  const descriptionElement = photoElement.querySelector('.social__caption');

  imageElement.src = url;
  imageElement.alt = description;

  likesCountElement.textContent = likes;
  descriptionElement.textContent = description;
};

export {openPhoto, renderPhoto, photoElement};
