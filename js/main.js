import {showErrorMessage} from './notifications.js';
import {renderThumbnails} from './thumbnails.js';
import {renderPhoto} from './photo-modal.js';
import {renderComments} from './comments.js';
import {openModal} from './modal.js';
import {photoModalElement} from './const-elements.js';
import {getData} from './api.js';
import {filterPhotos} from './filters.js';

const bootstrap = async () => {
  try {
    const thumbnailClickHandler = (dataPhoto) => {
      renderPhoto(dataPhoto);
      renderComments(dataPhoto.comments);
      openModal(photoModalElement);
    };

    const dataPhotos = await getData();
    renderThumbnails(dataPhotos, thumbnailClickHandler);
    filterPhotos(dataPhotos, thumbnailClickHandler);

  } catch (error) {
    showErrorMessage(error.message);
  }
};

bootstrap();

