import {photoModalElement} from './const-elements.js';

const renderPhoto = ({url, description, likes}) => {
  const imageElement = photoModalElement.querySelector('.big-picture__img img');
  const likesCountElement = photoModalElement.querySelector('.likes-count');
  const descriptionElement = photoModalElement.querySelector('.social__caption');

  imageElement.src = url;
  imageElement.alt = description;

  likesCountElement.textContent = likes;
  descriptionElement.textContent = description;
};

export {renderPhoto};
