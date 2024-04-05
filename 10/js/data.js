import {
  getRandomNumber,
  getSequentNumber,
  getRandomElement,
  getRandomUniqueNumber,
} from './utils.js';

import {
  COMMENTS_MIN,
  COMMENTS_MAX,
  AVATARS_MIN,
  AVATARS_MAX,
  MESSAGES,
  NAMES,
  PHOTOS_MIN,
  PHOTOS_MAX,
  LIKES_MAX,
  LIKES_MIN,
  DESCRIPTIONS,
} from './const-values.js';

const getPhotoId = getSequentNumber();
const getCommentId = getRandomUniqueNumber(COMMENTS_MIN, COMMENTS_MAX);
const createDataComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomNumber(AVATARS_MIN, AVATARS_MAX)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const createDataComments = () => {
  const commentsAmount = getRandomNumber(COMMENTS_MIN, COMMENTS_MAX);
  return Array.from({length: commentsAmount}, createDataComment);
};
const createDataPhoto = () => ({
  id: getPhotoId(),
  url: `photos/${getRandomNumber(PHOTOS_MIN, PHOTOS_MAX)}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomNumber(LIKES_MIN, LIKES_MAX),
  comments: createDataComments(),
});
const createDataPhotos = (amount) =>
  Array.from({length: amount}, createDataPhoto);

export {createDataPhotos};
