export const LOAD_POSTS = 'LOAD_POSTS';
export const UPVOTE = 'UPVOTE';

export function loadPosts (posts) {
  return {
    type: LOAD_POSTS,
    posts
  }
}

export function upVote(postId) {
  return {
    type: UPVOTE,
    postId
  }
}