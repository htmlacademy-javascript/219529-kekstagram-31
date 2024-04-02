const openModal = (modalElement) => {
  modalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeModal = (modalElement) => {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

export {
  openModal,
  closeModal,
};
