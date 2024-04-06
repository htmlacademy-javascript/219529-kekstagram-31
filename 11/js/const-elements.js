const photoModalElement = document.querySelector('.big-picture');
const loadCommentsButtonElement = photoModalElement.querySelector('.comments-loader');
const commentsContainerElement = photoModalElement.querySelector('.social__comments');
const formModalElement = document.querySelector('.img-upload__overlay');
const formElement = document.querySelector('#upload-select-image');
const formFileInputElement = formElement.querySelector('#upload-file');
const hashtagInputElement = formElement.querySelector('.text__hashtags');
const commentInputElement = formElement.querySelector('.text__description');
const formImageElement = formElement.querySelector('.img-upload__preview img');
const scaleInputElement = formElement.querySelector('.scale__control--value');
const effectNameInputElement = formElement.querySelector('.effect-level__value');
const effectLevelInputElement = formElement.querySelector('.effect-level__value');
const sliderContainerElement = formElement.querySelector('.img-upload__effect-level');
const sliderElement = formElement.querySelector('.effect-level__slider');
const effectsListElement = formElement.querySelector('.effects__list');
const formSubmitButtonElement = formElement.querySelector('.img-upload__submit');
const successTemplateElement = document.querySelector('#success').content;
const errorTemplateElement = document.querySelector('#error').content;

export {
  photoModalElement,
  loadCommentsButtonElement,
  commentsContainerElement,
  formModalElement,
  formElement,
  formFileInputElement,
  hashtagInputElement,
  commentInputElement,
  formImageElement,
  scaleInputElement,
  effectNameInputElement,
  effectLevelInputElement,
  sliderContainerElement,
  sliderElement,
  effectsListElement,
  formSubmitButtonElement,
  successTemplateElement,
  errorTemplateElement,
};

