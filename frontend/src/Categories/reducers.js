import {
  LOAD_CATEGORIES,
} from './actions';

function categories(state = [], action) {
  switch(action.type) {
    case LOAD_CATEGORIES:
      const { categories } = action;
      return categories.categories;
    default:
      return state;
  }
}

export default categories;