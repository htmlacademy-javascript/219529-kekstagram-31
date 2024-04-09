import {renderThumbnails} from './thumbnails.js';
import {debounce, fisherYatesShuffle} from './utils.js';
import {filtersContainerElement} from './const-elements.js';
import {DEBOUNCE_DELAY, RANDOM_PHOTOS_COUNT} from './const-values.js';

const debounceRenderThumbnails = debounce(renderThumbnails, DEBOUNCE_DELAY);

const activateButton = (evt) => {
  filtersContainerElement.querySelectorAll('button')
    .forEach((button) => {
      button.classList.remove('img-filters__button--active');
    });

  evt.target.classList.add('img-filters__button--active');
};

const filterPhotos = (dataPhotos, thumbnailClickHandler) => {
  const defaultPButton = filtersContainerElement.querySelector('#filter-default');
  const randomButton = filtersContainerElement.querySelector('#filter-random');
  const discussedButton = filtersContainerElement.querySelector('#filter-discussed');

  filtersContainerElement.classList.remove('img-filters--inactive');

  const defaultButtonClickHandler = (evt) => {
    activateButton(evt);
    debounceRenderThumbnails(dataPhotos, thumbnailClickHandler);
  };

  const randomButtonClickHandler = (evt) => {
    const filteredDataPhotos = fisherYatesShuffle(dataPhotos).slice(0, RANDOM_PHOTOS_COUNT);
    activateButton(evt);
    debounceRenderThumbnails(filteredDataPhotos, thumbnailClickHandler);
  };

  const discussedButtonClickHandler = (evt) => {
    const filteredDataPhotos = dataPhotos
      .slice()
      .sort((dataPhotoA, dataPhotoB) =>
        dataPhotoB.comments.length - dataPhotoA.comments.length
      );
    activateButton(evt);
    debounceRenderThumbnails(filteredDataPhotos, thumbnailClickHandler);
  };

  defaultPButton.addEventListener('click', defaultButtonClickHandler);
  randomButton.addEventListener('click', randomButtonClickHandler);
  discussedButton.addEventListener('click', discussedButtonClickHandler);
};

export {filterPhotos};
