const thumbnailTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailContainerElement = document.querySelector('.pictures');
const createThumbnail = ({url, description, likes, comments}) => {
  const thumbnailElement = thumbnailTemplateElement.cloneNode(true);
  const imageElement = thumbnailElement.querySelector('.picture__img');
  const commentsCountElement = thumbnailElement.querySelector('.picture__comments');
  const likesCountElement = thumbnailElement.querySelector('.picture__likes');

  imageElement.src = url;
  imageElement.alt = description;

  commentsCountElement.textContent = comments.length;
  likesCountElement.textContent = likes;

  return thumbnailElement;
};

const renderThumbnails = (dataPhotos) => {
  const fragment = document.createDocumentFragment();

  dataPhotos.forEach((dataPhoto) => {
    const photoThumbnail = createThumbnail(dataPhoto);
    fragment.append(photoThumbnail);
  });

  thumbnailContainerElement.append(fragment);
};

export {renderThumbnails};
