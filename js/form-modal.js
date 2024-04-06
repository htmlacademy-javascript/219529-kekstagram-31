import {formElement, formFileInputElement, formModalElement, formSubmitButtonElement, successTemplateElement, errorTemplateElement} from './const-elements.js';
import {sendData} from './api.js';
import {openModal, closeModal} from './modal.js';
import {setEffect, setScale} from './form-image-edit.js';
import {pristine} from './form-validation.js';
import {FormSubmitButtonText} from './const-values.js';
import {showNotification} from './utils.js';


const disableFormSubmitButton = (text) => {
  formSubmitButtonElement.disabled = true;
  formSubmitButtonElement.textContent = text;
};

const enableFormSubmitButton = (text) => {
  formSubmitButtonElement.disabled = false;
  formSubmitButtonElement.textContent = text;
};

const sendUploadFormData = async (form) => {
  const isValid = pristine.validate();

  if (isValid) {
    disableFormSubmitButton(FormSubmitButtonText.SENDING);

    try {
      await sendData(new FormData(form));
      showNotification(successTemplateElement, () => closeModal(formModalElement));
    } catch (error) {
      showNotification(errorTemplateElement);
    } finally {
      enableFormSubmitButton(FormSubmitButtonText.IDLE);
    }
  }

  if (!isValid) {
    // pristine.addError(input, error) - add a custom error to an input element
    // pristine.getErrors(input) - get the errors of the form or a specific field
    pristine.addError(pristine.getErrors()[0].input);
  }
};

const uploadInputElementChangeHandler = () => {
  openModal(formModalElement);
  setScale();
  setEffect();
};

const uploadFormSubmitHandler = (evt) => {
  evt.preventDefault();
  sendUploadFormData(evt.target);
};

formFileInputElement.addEventListener('change', uploadInputElementChangeHandler);
formElement.addEventListener('submit', uploadFormSubmitHandler);


