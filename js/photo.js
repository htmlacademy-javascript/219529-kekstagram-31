const photoElement = document.querySelector('.big-picture');

const closePhoto = () => {
  photoElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const documentKeydownHandler = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhoto();
  }
};

const openPhoto = () => {
  photoElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', documentKeydownHandler);
};

const renderPhoto = ({url, description, likes}) => {
  const imageElement = photoElement.querySelector('.big-picture__img img');
  const likesCountElement = photoElement.querySelector('.likes-count');
  const descriptionElement = photoElement.querySelector('.social__caption');
  const closeButton = photoElement.querySelector('#picture-cancel');

  imageElement.src = url;
  imageElement.alt = description;

  likesCountElement.textContent = likes;
  descriptionElement.textContent = description;

  closeButton.addEventListener('click', closePhoto);
};

export {openPhoto, renderPhoto};
