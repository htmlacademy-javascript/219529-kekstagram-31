const photoModalElement = document.querySelector('.big-picture');
const loadCommentsButton = photoModalElement.querySelector('.comments-loader');
const commentsContainerElement = photoModalElement.querySelector('.social__comments');
const formModalElement = document.querySelector('.img-upload__overlay');
const formElement = document.querySelector('#upload-select-image');
const formFileInputElement = formElement.querySelector('#upload-file');
const hashtagInputElement = formElement.querySelector('.text__hashtags');
const commentInputElement = formElement.querySelector('.text__description');
const formImageElement = formElement.querySelector('.img-upload__preview img');
const effectPreviewElements = formElement.querySelectorAll('.effects__preview');
const scaleInputElement = formElement.querySelector('.scale__control--value');
const scaleSmallerButton = formElement.querySelector('.scale__control--smaller');
const scaleBiggerButton = formElement.querySelector('.scale__control--bigger');
const effectNameInputElement = formElement.querySelector('.effect-level__value');
const effectLevelInputElement = formElement.querySelector('.effect-level__value');
const sliderContainerElement = formElement.querySelector('.img-upload__effect-level');
const sliderElement = formElement.querySelector('.effect-level__slider');
const effectsListElement = formElement.querySelector('.effects__list');
const formSubmitButton = formElement.querySelector('.img-upload__submit');
const successTemplateElement = document.querySelector('#success').content;
const errorTemplateElement = document.querySelector('#error').content;
const filtersContainerElement = document.querySelector('.img-filters');

export {
  photoModalElement,
  loadCommentsButton,
  commentsContainerElement,
  formModalElement,
  formElement,
  formFileInputElement,
  hashtagInputElement,
  commentInputElement,
  formImageElement,
  effectPreviewElements,
  scaleInputElement,
  scaleSmallerButton,
  scaleBiggerButton,
  effectNameInputElement,
  effectLevelInputElement,
  sliderContainerElement,
  sliderElement,
  effectsListElement,
  formSubmitButton,
  successTemplateElement,
  errorTemplateElement,
  filtersContainerElement,
};

