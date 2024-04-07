import {TIMEOUT_MESSAGE_REMOVE} from './const-values.js';

const showErrorMessage = (message) => {
  const errorElement = document.querySelector('#data-error')
    .content
    .querySelector('.data-error')
    .cloneNode(true);

  if (message) {
    errorElement.querySelector('.data-error__title').textContent = message;
  }

  document.body.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, TIMEOUT_MESSAGE_REMOVE);
};

const closeNotification = (evt) => {
  evt.stopPropagation();
  const notificationElement = document.querySelector('.success')
    || document.querySelector('.error');
  const closeNotificationButtonElement = notificationElement.querySelector(
    'button');
  if (evt.key === 'Escape'
    || evt.target === notificationElement
    || evt.target === closeNotificationButtonElement) {
    notificationElement.remove();
    document.body.removeEventListener('click', closeNotification);
    document.body.removeEventListener('keydown', closeNotification);
  }
};
const showNotification = (template, trigger = null) => {
  trigger?.();
  const notificationElement = template.cloneNode(true);
  document.body.append(notificationElement);
  document.body.addEventListener('click', closeNotification);
  document.body.addEventListener('keydown', closeNotification);
};

export {showNotification, closeNotification, showErrorMessage};
