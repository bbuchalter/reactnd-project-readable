import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../Api';
import { UPVOTE, REQUEST_POSTS, LOAD_POSTS } from './actions';

function* fetchPosts(action) {
  try {
    const posts = yield call(Api.fetchPosts);
    yield put({type: LOAD_POSTS, posts});
  } catch (e) {
    console.error(REQUEST_POSTS, e)
  }
}

function* upVote(action) {
  try {
    yield call(Api.upVote, action.postId)
  } catch (e) {
    console.error(UPVOTE, e)
  }
}

function* postsSaga() {
  yield takeLatest(REQUEST_POSTS, fetchPosts);
  yield takeEvery(UPVOTE, upVote);
}

export default postsSaga;
