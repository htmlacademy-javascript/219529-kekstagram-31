const PHOTOS_MIN = 1;
const PHOTOS_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATARS_MIN = 1;
const AVATARS_MAX = 6;

const DESCRIPTIONS = [
  'Не откладывай на завтра, откладывай сразу навсегда',
  'Однажды мне было весело, но это было ужасно',
  'Худых людей похитить проще',
  'Раньше я думала, что я нерешительная, но теперь я в этом не уверена',
  'Мне нужны шестимесячные каникулы два раза в год',
  'Нынешней весной зима особенно удалась'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Василиса', 'Мира', 'Лёва', 'Ева', 'Дарина', 'Марк', 'Артём', 'Варя', 'Лёша', 'Лея', 'Арина', 'Мия', 'Платон', 'Доминик', 'Эвита'];

const getSequentNumber = () => {
  let lastNumber = 0;
  return function () {
    lastNumber++;
    return lastNumber;
  };
};
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElement = (elements) =>
  elements[getRandomNumber(elements.length - 1, 0)];

function getRandomUniqueNumber (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

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

createPhotos(PHOTOS_MAX);
