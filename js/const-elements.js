const photoModalElement = document.querySelector('.big-picture');
const loadCommentsButtonElement = photoModalElement.querySelector('.comments-loader');
const commentsContainerElement = photoModalElement.querySelector('.social__comments');
const uploadModalElement = document.querySelector('.img-upload__overlay');
const uploadFormElement = document.querySelector('#upload-select-image');
const uploadInputElement = uploadFormElement.querySelector('#upload-file');
const hashtagInputElement = uploadFormElement.querySelector('.text__hashtags');
const commentInputElement = uploadFormElement.querySelector('.text__description');

export {
  photoModalElement,
  loadCommentsButtonElement,
  commentsContainerElement,
  uploadModalElement,
  uploadFormElement,
  uploadInputElement,
  hashtagInputElement,
  commentInputElement,
};

