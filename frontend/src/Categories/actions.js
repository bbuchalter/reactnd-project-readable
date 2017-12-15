export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export function requestCategories() {
  return {
    type: REQUEST_CATEGORIES,
  }
}

export function loadCategories(categories) {
  return {
    type: LOAD_CATEGORIES,
    categories
  }
}