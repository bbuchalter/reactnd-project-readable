export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';

export function requestComments(postId) {
  return {
    type: REQUEST_COMMENTS,
    postId
  }
}

export function loadComments (comments) {
  return {
    type: LOAD_COMMENTS,
    comments
  }
}