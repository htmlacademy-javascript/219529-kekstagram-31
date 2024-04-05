import {createDataPhotos} from './data.js';
import {PHOTOS_MAX} from './const-values.js';
import {renderThumbnails} from './thumbnails.js';
import {renderPhoto} from './photo-modal.js';
import {renderComments} from './comments.js';
import {openModal} from './modal.js';
import {photoModalElement} from './const-elements.js';

const thumbnailClickHandler = (dataPhoto) => {
  renderPhoto(dataPhoto);
  renderComments(dataPhoto.comments);
  openModal(photoModalElement);
};

const dataPhotos = createDataPhotos(PHOTOS_MAX);
renderThumbnails(dataPhotos, thumbnailClickHandler);
