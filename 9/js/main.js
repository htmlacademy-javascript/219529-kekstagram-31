import {createDataPhotos} from './data.js';
import {PHOTOS_MAX} from './const.js';
import {renderThumbnails} from './thumbnails.js';
import {openPhoto, renderPhoto} from './photo-modal.js';
import {renderComments} from './comments.js';

const thumbnailClickHandler = (dataPhoto) => {
  openPhoto();
  renderPhoto(dataPhoto);
  renderComments(dataPhoto.comments);
};

const dataPhotos = createDataPhotos(PHOTOS_MAX);
renderThumbnails(dataPhotos, thumbnailClickHandler);
