import {renderThumbnails} from './thumbnails.js';
import {debounce, fisherYatesShuffle} from './utils.js';
import {filtersContainerElement} from './const-elements.js';
import {DEBOUNCE_DELAY, RANDOM_PHOTOS_COUNT} from './const-values.js';

const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

let currentFilter = 'filter-default';
let photos = [];
let handler;

const debounceRender = debounce(renderThumbnails, DEBOUNCE_DELAY);

const applyFilter = () => {
  let filteredDataPhotos = [];
  if (currentFilter === FILTER.default) {
    filteredDataPhotos = photos;
  }

  if (currentFilter === FILTER.random) {
    filteredDataPhotos = fisherYatesShuffle(photos).slice(0, RANDOM_PHOTOS_COUNT);
  }

  if (currentFilter === FILTER.discussed) {
    filteredDataPhotos = photos
      .slice()
      .sort((dataPhotoA, dataPhotoB) =>
        dataPhotoB.comments.length - dataPhotoA.comments.length
      );
  }

  debounceRender(filteredDataPhotos, handler);
};

const filterButtonClickHandler = (evt) => {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);

  if (!targetButton.matches('button')) {
    return;
  }

  if (activeButton === targetButton) {
    return;
  }

  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
};

const filterPhotos = (dataPhotos, thumbnailsClickHandler) => {
  filtersContainerElement.classList.remove('img-filters--inactive');
  filtersContainerElement.addEventListener('click', filterButtonClickHandler);
  photos = dataPhotos;
  handler = thumbnailsClickHandler;
};

export {filterPhotos};
