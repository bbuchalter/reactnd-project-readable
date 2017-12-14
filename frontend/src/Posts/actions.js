export const REQUEST_POSTS = 'REQUEST_POSTS';
export const LOAD_POSTS = 'LOAD_POSTS';
export const REQUEST_UPVOTE = 'REQUEST_UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';
export const UPDATE_LOCAL_POST = 'UPDATE_LOCAL_POST';

export function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

export function loadPosts (posts) {
  return {
    type: LOAD_POSTS,
    posts
  }
}

export function requestUpVote(postId) {
  return {
    type: REQUEST_UPVOTE,
    postId
  }
}

export function downVote(postId) {
  return {
    type: DOWNVOTE,
    postId
  }
}

export function updateLocalPost(post) {
  return {
    type: UPDATE_LOCAL_POST,
    post
  }
}