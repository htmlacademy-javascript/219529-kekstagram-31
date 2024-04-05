import {uploadFormElement, uploadInputElement, uploadModalElement} from './const-elements.js';
import {openModal} from './modal.js';
import {
  resetEffects,
  resetScale,
  setEffects,
  setScale,
} from './form-image-edit.js';
import {pristine} from './form-validation.js';

const uploadInputElementChangeHandler = () => {
  resetScale();
  resetEffects();
  openModal(uploadModalElement);
  setScale();
  setEffects();
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


