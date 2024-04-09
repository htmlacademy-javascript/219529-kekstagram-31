import {formElement, formFileInputElement, formModalElement, formSubmitButton, effectPreviewElements, successTemplateElement, errorTemplateElement, formImageElement,} from './const-elements.js';
import {sendData} from './api.js';
import {openModal, closeModal} from './modal.js';
import {resetEffect, resetScale, setEffect, setScale} from './form-image-edit.js';
import {pristine} from './form-validation.js';
import {FormSubmitButtonText, Messages, IMAGE_FILE_TYPES} from './const-values.js';
import {showErrorMessage, showNotification} from './notifications.js';

const disableFormSubmitButton = (text) => {
  formSubmitButton.disabled = true;
  formSubmitButton.textContent = text;
};

const enableFormSubmitButton = (text) => {
  formSubmitButton.disabled = false;
  formSubmitButton.textContent = text;
};

const sendFormData = async (form) => {
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

const uploadImageFile = () => {
  const imageFile = formFileInputElement.files[0];
  const isImageFileTypeValid = IMAGE_FILE_TYPES.includes(imageFile.type);

  if (isImageFileTypeValid) {
    const url = URL.createObjectURL(imageFile);
    formImageElement.src = url;
    effectPreviewElements.forEach((effectPreviewElement) => {
      effectPreviewElement.style.backgroundImage = `url(${url})`;
    });
    setScale();
    setEffect();
    openModal(formModalElement);
  }

  if (!isImageFileTypeValid) {
    showErrorMessage(Messages.INVALID_IMAGE_FILE_TYPE);
  }
};

const fileInputElementChangeHandler = () => {
  resetScale();
  resetEffect();
  uploadImageFile();
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  sendFormData(evt.target);
};

formFileInputElement.addEventListener('change', fileInputElementChangeHandler);
formElement.addEventListener('submit', formSubmitHandler);


