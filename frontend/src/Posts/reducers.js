import {
  LOAD_POSTS,
  DOWNVOTE,
  UPDATE_LOCAL_POST
} from './actions';

function posts(state = {}, action) {
  switch(action.type) {
    case LOAD_POSTS:
      const { posts } = action;
      let postsById = {};
      posts.forEach((post) => {
        postsById[post.id] = post
      });
      return postsById;
    case DOWNVOTE:
      const { postId } = action
      return {
        ...state,
        [postId]: {
          ...state[postId],
          voteScore: state[postId].voteScore-1
        }
      }
    case UPDATE_LOCAL_POST:
      const { post } = action
      return {
        ...state,
        [post.id]: post
      }
    default:
      return state;
  }
}

export default posts;