export const REQUEST_POSTS = 'REQUEST_POSTS';
export const REQUEST_POST = 'REQUEST_POST';
export const LOAD_POSTS = 'LOAD_POSTS';
export const REQUEST_POST_UPVOTE = 'REQUEST_POST_UPVOTE';
export const REQUEST_POST_DOWNVOTE = 'REQUEST_POST_DOWNVOTE';
export const UPDATE_LOCAL_POST = 'UPDATE_LOCAL_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

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

export function requestPostDownVote(postId) {
  return {
    type: REQUEST_POST_DOWNVOTE,
    postId
  }
}

export function updateLocalPost(post) {
  return {
    type: UPDATE_LOCAL_POST,
    post
  }
}

export function createPost(post) {
  return {
    type: CREATE_POST,
    post
  }
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  }
}