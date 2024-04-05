const photoModalElement = document.querySelector('.big-picture');
const loadCommentsButtonElement = photoModalElement.querySelector('.comments-loader');
const commentsContainerElement = photoModalElement.querySelector('.social__comments');
const uploadModalElement = document.querySelector('.img-upload__overlay');
const uploadFormElement = document.querySelector('#upload-select-image');
const uploadInputElement = uploadFormElement.querySelector('#upload-file');
const hashtagInputElement = uploadFormElement.querySelector('.text__hashtags');
const commentInputElement = uploadFormElement.querySelector('.text__description');
const formImageElement = uploadFormElement.querySelector('.img-upload__preview img');
const scaleInputElement = uploadFormElement.querySelector('.scale__control--value');
const effectNameInputElement = uploadFormElement.querySelector('.effect-level__value');
const effectLevelInputElement = uploadFormElement.querySelector('.effect-level__value');
const sliderContainerElement = uploadFormElement.querySelector('.img-upload__effect-level');
const sliderElement = uploadFormElement.querySelector('.effect-level__slider');
const effectsListElement = uploadFormElement.querySelector('.effects__list');

export {
  photoModalElement,
  loadCommentsButtonElement,
  commentsContainerElement,
  uploadModalElement,
  uploadFormElement,
  uploadInputElement,
  hashtagInputElement,
  commentInputElement,
  formImageElement,
  scaleInputElement,
  effectNameInputElement,
  effectLevelInputElement,
  sliderContainerElement,
  sliderElement,
  effectsListElement
};

