import {openModal, closeModal} from './modal.js';
import {pristine} from './form-validation.js';

const uploadElement = document.querySelector('.img-upload__overlay');
const closeButtonElement = uploadElement.querySelector('#upload-cancel');
const uploadFormElement = document.querySelector('#upload-select-image');
const uploadInputElement = uploadFormElement.querySelector('#upload-file');
const hashtagInputElement = uploadFormElement.querySelector('.text__hashtags');
const commentInputElement = uploadFormElement.querySelector('.text__description');

const uploadFormSubmitHandler = (evt) => {
  const isInvalid = !pristine.validate();
  if (isInvalid) {
    evt.preventDefault();
    // pristine.addError(input, error) - add a custom error to an input element
    // pristine.getErrors(input) - get the errors of the form or a specific field
    pristine.addError(pristine.getErrors()[0].input);
  }
};

const openUpload = () => {
  openModal(uploadElement);
  document.addEventListener('keydown', documentKeydownHandler);
  closeButtonElement.addEventListener('click', closeButtonClickHandler);
};

const closeUpload = () => {
  closeModal(uploadElement);
  uploadFormElement.reset();
  closeButtonElement.removeEventListener('click', closeButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

function documentKeydownHandler (evt) {
  if (evt.key === 'Escape'
    && evt.target !== hashtagInputElement
    && evt.target !== commentInputElement) {
    evt.preventDefault();
    closeUpload();
  }
}
function closeButtonClickHandler (evt) {
  evt.preventDefault();
  closeUpload();
}

const uploadInputElementChangeHandler = () => openUpload();

uploadInputElement.addEventListener('change', uploadInputElementChangeHandler);
uploadFormElement.addEventListener('submit', uploadFormSubmitHandler);


