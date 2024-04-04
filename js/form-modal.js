import {pristine} from './form-validation.js';
import {uploadFormElement, uploadInputElement, uploadModalElement} from './const-elements.js';
import {openModal} from './modal.js';

const uploadInputElementChangeHandler = () => {
  openModal(uploadModalElement);
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


