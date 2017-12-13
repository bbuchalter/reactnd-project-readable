import { LOAD_POSTS } from './actions';

function posts(state = [], action) {
  const { posts } = action

  switch(action.type) {
    case LOAD_POSTS:
      return posts;
    default:
      return state;
  }
}

export default posts;