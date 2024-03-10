import {
  getRandomNumber,
  getSequentNumber,
  getRandomElement,
  getRandomUniqueNumber,
} from './util.js';

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
} from './const';

const getPhotoId = getSequentNumber();
const getCommentId = getRandomUniqueNumber(COMMENTS_MIN, COMMENTS_MAX);
const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomNumber(AVATARS_MIN, AVATARS_MAX)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const createComments = () => {
  const commentsAmount = getRandomNumber(COMMENTS_MIN, COMMENTS_MAX);
  return Array.from({length: commentsAmount}, createComment);
};
const createPhoto = () => ({
  id: getPhotoId(),
  url: `photos${getRandomNumber(PHOTOS_MIN, PHOTOS_MAX)}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomNumber(LIKES_MIN, LIKES_MAX),
  comments: createComments(),
});
const createPhotos = (amount) =>
  Array.from({length: amount}, createPhoto);

export {createPhotos};
