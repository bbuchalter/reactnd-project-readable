export const REQUEST_POSTS = 'REQUEST_POSTS';
export const REQUEST_POST = 'REQUEST_POST';
export const LOAD_POSTS = 'LOAD_POSTS';
export const REQUEST_POST_UPVOTE = 'REQUEST_POST_UPVOTE';
export const REQUEST_DOWNVOTE = 'REQUEST_DOWNVOTE';
export const UPDATE_LOCAL_POST = 'UPDATE_LOCAL_POST';

export function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

export function requestPost(postId) {
  return {
    type: REQUEST_POST,
    postId
  }
}

export function loadPosts (posts) {
  return {
    type: LOAD_POSTS,
    posts
  }
}

export function requestPostUpVote(postId) {
  return {
    type: REQUEST_POST_UPVOTE,
    postId
  }
}

export function requestDownVote(postId) {
  return {
    type: REQUEST_DOWNVOTE,
    postId
  }
}

export function updateLocalPost(post) {
  return {
    type: UPDATE_LOCAL_POST,
    post
  }
}