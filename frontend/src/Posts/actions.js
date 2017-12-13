export const LOAD_POSTS = 'LOAD_POSTS';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';

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

export function downVote(postId) {
  return {
    type: DOWNVOTE,
    postId
  }
}