const createComment = (dataComment) =>
  `<li class="social__comment">
    <img
     class="social__picture"
     src="${dataComment.avatar}"
     alt="${dataComment.name}"
     width="35" height="35"/>
    <p class="social__text">${dataComment.message}</p>
  </li>`;

const renderComments = (dataComments) => {
  const commentsContainerElement = document.querySelector('.social__comments');
  const commentsTotalCountElement = document.querySelector(
    '.social__comment-total-count');
  const commentsShownCountElement = document.querySelector(
    '.social__comment-shown-count');
  commentsContainerElement.innerHTML = '';

  dataComments.forEach((dataComment) => {
    const comment = createComment(dataComment);
    commentsContainerElement.insertAdjacentHTML('beforeend', comment);
  });

  commentsTotalCountElement.textContent = dataComments.length;
  commentsShownCountElement.textContent = dataComments.length;

  document.querySelector('.comments-loader').classList.add('hidden');
};

export {renderComments};
