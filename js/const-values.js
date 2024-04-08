const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные',
  [Method.POST]: 'Не удалось отправить данные формы',
};

const effectsSettings = {
  chrome: {filter: 'grayscale', min: 0, max: 1, step: 0.1, unit: ''},
  sepia: {filter: 'sepia', min: 0, max: 1, step: 0.1, unit: ''},
  marvin: {filter: 'invert', min: 0, max: 100, step: 1, unit: '%'},
  phobos: {filter: 'blur', min: 0, max: 3, step: 0.1, unit: 'px'},
  heat: {filter: 'brightness', min: 1, max: 3, step: 0.1, unit: ''},
};

const FormSubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...',
};

const COMMENTS_RENDER_STEP = 5;
const COMMENT_MAX_LENGTH = 140;
const HASHTAGS_MAX = 5;
const HASHTAG_MAX_LENGTH = 20;
const SCALE_MAX = 1;
const SCALE_MIN = 0.25;
const SCALE_CHANGE_STEP = 0.25;
const TIMEOUT_MESSAGE_REMOVE = 500;
const RANDOM_PHOTOS_COUNT = 10;
const DEBOUNCE_DELAY = 500;


export {
  BASE_URL,
  Route,
  Method,
  ErrorText,
  FormSubmitButtonText,
  effectsSettings,
  COMMENTS_RENDER_STEP,
  COMMENT_MAX_LENGTH,
  SCALE_MIN,
  SCALE_MAX,
  SCALE_CHANGE_STEP,
  HASHTAGS_MAX,
  HASHTAG_MAX_LENGTH,
  TIMEOUT_MESSAGE_REMOVE,
  RANDOM_PHOTOS_COUNT,
  DEBOUNCE_DELAY,
};
