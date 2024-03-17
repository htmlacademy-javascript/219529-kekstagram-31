import {createPhotos} from './data.js';
import {PHOTOS_MAX} from './const.js';
import {renderThumbnails} from './render.js';

const dataPhotos = createPhotos(PHOTOS_MAX);
renderThumbnails(dataPhotos);
