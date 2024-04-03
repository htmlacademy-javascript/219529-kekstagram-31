const openModal = (modalElement) => {
  const closeButtonElement = modalElement.querySelector('.cancel');
  modalElement.classList.remove('hidden');
  modalElement.classList.add('modal');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', documentKeydownHandler);
  closeButtonElement.addEventListener('click', closeButtonClickHandler);
};

const closeModal = (modalElement) => {
  modalElement.classList.add('hidden');
  modalElement.classList.remove('modal');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', documentKeydownHandler);
  modalElement.querySelector('.cancel').removeEventListener('click', closeButtonClickHandler);
  document.querySelector('#upload-select-image').reset();
};

function documentKeydownHandler (evt) {
  if (evt.key === 'Escape'
    && !evt.target.classList.contains('text__hashtags')
    && !evt.target.classList.contains('text__description')) {
    evt.preventDefault();
    const modalElement = document.querySelector('.modal');
    if (modalElement) {
      closeModal(modalElement);
    }
  }
}

function closeButtonClickHandler (evt) {
  evt.preventDefault();
  const modalElement = document.querySelector('.modal');
  closeModal(modalElement);
}

export {openModal};
