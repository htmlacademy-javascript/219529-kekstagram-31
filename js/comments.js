import {COMMENTS_RENDER_STEP} from './const-values.js';
import {commentsContainerElement, loadCommentsButton, photoModalElement,} from './const-elements.js';

let commentsCurrentCount = 0;
let comments = [];

const createComment = (dataComment) =>
  `<li class="social__comment">
    <img
     class="social__picture"
     src="${dataComment.avatar}"
     alt="${dataComment.name}"
     width="35" height="35"/>
    <p class="social__text">${dataComment.message}</p>
  </li>`;

const renderNextComments = () => {
  const commentsTotalCountElement = photoModalElement.querySelector(
    '.social__comment-total-count');
  const commentsShownCountElement = photoModalElement.querySelector(
    '.social__comment-shown-count');

  const renderedComments = comments.slice(commentsCurrentCount, commentsCurrentCount + COMMENTS_RENDER_STEP);
  renderedComments.forEach((comment) => {
    commentsContainerElement.insertAdjacentHTML('beforeend', createComment(comment));
  });

  commentsCurrentCount += COMMENTS_RENDER_STEP;

  commentsTotalCountElement.textContent = comments.length;
  commentsShownCountElement.textContent = commentsContainerElement.children.length;

  if (commentsContainerElement.children.length >= comments.length) {
    loadCommentsButton.classList.add('hidden');
  }
};

const clearComments = () => {
  commentsContainerElement.innerHTML = '';
  commentsCurrentCount = 0;
  comments = [];
  loadCommentsButton.classList.remove('hidden');
  loadCommentsButton.removeEventListener('click', loadCommentsButtonClickHandler);
};

const renderComments = (dataComments) => {
  clearComments();
  comments = dataComments;
  renderNextComments();

  loadCommentsButton.addEventListener('click', loadCommentsButtonClickHandler);
};

function loadCommentsButtonClickHandler () {
  renderNextComments();
}

export {renderComments};
