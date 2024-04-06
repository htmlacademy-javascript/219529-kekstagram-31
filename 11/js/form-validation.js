import {COMMENT_MAX_LENGTH, HASHTAG_MAX_LENGTH, HASHTAGS_MAX} from './const-values.js';
import { formElement, hashtagInputElement, commentInputElement,} from './const-elements.js';

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__form', // class of the parent element where the error/success class is added
  errorTextParent: 'img-upload__field-wrapper', // class of the parent element where error text element is appended
  errorTextTag: 'div', // type of element to create for the error text
  errorTextClass: 'img-upload__field-wrapper--error', // class of the error text element
  errorClass: 'has-danger',
  successClass: 'has-success',
}, true); // whether pristine should validate as you type

let errorMessage = '';
const getErrorMessage = () => errorMessage;

const isHashtagsInputTextValid = (inputText) => {
  // hashtags are not required
  if (!inputText) {
    return true;
  }

  const hashtags = inputText.toLowerCase().trim().split(/\s+/);

  const rules = [
    {
      check: hashtags.some((hashtag) => hashtag[0] !== '#'),
      error: 'Хэштег должен начинаться с символа \'#\'',
    },
    {
      check: hashtags.some((hashtag) => !/^#[a-zа-яё0-9]{1,19}$/i.test(hashtag)),
      error: 'Хэштег должен состоять из букв и чисел и не может содержать #, @, $, -, :, , и т. д.',
    },
    {
      check: hashtags.some((hashtag) => hashtag === '#'),
      error: 'Хэштег не может состоять только из одной решётки',
    },
    {
      check: hashtags.some((hashtag) => hashtag.length > HASHTAG_MAX_LENGTH),
      error: `Максимальная длина одного хэштега ${HASHTAG_MAX_LENGTH} символов, включая решётку`,
    },
    {
      check: hashtags.some((hashtag) => hashtag.slice(1).includes('#')),
      error: 'Хэштеги разделяются пробелами',
    },
    {
      check: hashtags.some((hashtag, num, array) => array.includes(hashtag, num + 1)),
      error: 'Один и тот же хэштег не может быть использован дважды',
    },
    {
      check: hashtags.length > HASHTAGS_MAX,
      error: `Нельзя указать больше ${HASHTAGS_MAX} хэштегов`,
    },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const isCommentInputTextValid = (inputText) => {
  // comment is not required
  if (!inputText) {
    return true;
  }
  const isInvalid = inputText.length > COMMENT_MAX_LENGTH;
  errorMessage = 'Длина комментария не может составлять больше 140 символов';
  return !isInvalid;
};

pristine.addValidator(hashtagInputElement, isHashtagsInputTextValid, getErrorMessage);
pristine.addValidator(commentInputElement, isCommentInputTextValid, getErrorMessage);

export {pristine};
