export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const REQUEST_COMMENT_UPVOTE = 'REQUEST_COMMENT_UPVOTE';
export const REQUEST_COMMENT_DOWNVOTE = 'REQUEST_COMMENT_DOWNVOTE';
export const UPDATE_LOCAL_COMMENT = 'UPDATE_LOCAL_COMMENT';
export const REQUEST_DELETE_COMMENT = 'REQUEST_DELETE_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

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

export function requestCommentUpVote(commentId) {
  return {
    type: REQUEST_COMMENT_UPVOTE,
    commentId
  }
}

export function requestCommentDownVote(commentId) {
  return {
    type: REQUEST_COMMENT_DOWNVOTE,
    commentId
  }
}

export function updateLocalComment (comment) {
  return {
    type: UPDATE_LOCAL_COMMENT,
    comment
  }
}

export function requestDeleteComment(commentId) {
  return {
    type: REQUEST_DELETE_COMMENT,
    commentId
  }
}

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    comment
  }
}

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    comment
  }
}