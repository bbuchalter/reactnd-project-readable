import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../Api';
import {
  REQUEST_CATEGORIES,
  LOAD_CATEGORIES
 } from './actions';

function* fetchCategories(action) {
  try {
    const categories = yield call(Api.fetchCategories);
    yield put({type: LOAD_CATEGORIES, categories});
  } catch(e) {
    console.error(REQUEST_CATEGORIES, e)
  }
}

function* postsSaga() {
  yield takeLatest(REQUEST_CATEGORIES, fetchCategories);
}

export default postsSaga;
