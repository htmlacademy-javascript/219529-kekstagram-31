import {openModal} from './modal.js';
import {pristine} from './form-validation.js';

const uploadElement = document.querySelector('.img-upload__overlay');
const uploadFormElement = document.querySelector('#upload-select-image');
const uploadInputElement = uploadFormElement.querySelector('#upload-file');

const uploadInputElementChangeHandler = () => {
  uploadFormElement.reset();
  openModal(uploadElement);
};

const uploadFormSubmitHandler = (evt) => {
  const isInvalid = !pristine.validate();
  if (isInvalid) {
    evt.preventDefault();
    // pristine.addError(input, error) - add a custom error to an input element
    // pristine.getErrors(input) - get the errors of the form or a specific field
    pristine.addError(pristine.getErrors()[0].input);
  }
};

uploadInputElement.addEventListener('change', uploadInputElementChangeHandler);
uploadFormElement.addEventListener('submit', uploadFormSubmitHandler);


