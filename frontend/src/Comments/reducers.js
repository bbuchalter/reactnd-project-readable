import {
  LOAD_COMMENTS,
  UPDATE_LOCAL_COMMENT,
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
    case UPDATE_LOCAL_COMMENT:
      const { comment } = action
      return {
        ...state,
        [comment.id]: comment
      }
    default:
      return state;
  }
}

export default comments;