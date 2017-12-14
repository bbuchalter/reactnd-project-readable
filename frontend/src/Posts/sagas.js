import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../Api';
import { REQUEST_POSTS, LOAD_POSTS } from './actions';

function* fetchPosts(action) {
  try {
    const posts = yield call(Api.fetchPosts);
    yield put({type: LOAD_POSTS, posts});
  } catch (e) {
    console.error(LOAD_POSTS, e)
  }
}

function* postsSaga() {
  yield takeLatest(REQUEST_POSTS, fetchPosts);
}

export default postsSaga;
