import {createDataPhotos} from './data.js';
import {PHOTOS_MAX} from './const.js';
import {renderThumbnails} from './render.js';

const dataPhotos = createDataPhotos(PHOTOS_MAX);
renderThumbnails(dataPhotos);
