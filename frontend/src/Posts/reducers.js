import { LOAD_POSTS, UPVOTE } from './actions';

function posts(state = {}, action) {
  const { posts, postId } = action

  switch(action.type) {
    case LOAD_POSTS:
      let postsById = {};
      posts.forEach((post) => {
        postsById[post.id] = post
      });
      return postsById;
    case UPVOTE:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          voteScore: state[postId].voteScore+1
        }
      }
    default:
      return state;
  }
}

export default posts;