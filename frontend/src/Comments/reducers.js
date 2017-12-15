import {
  LOAD_COMMENTS,
} from './actions';

function comments(state = {}, action) {
  switch(action.type) {
    case LOAD_COMMENTS:
      const { comments } = action;
      let commentsById = {};
      comments.forEach((comment) => {
        commentsById[comment.id] = comment
      });
      return commentsById;
    default:
      return state;
  }
}

export default comments;