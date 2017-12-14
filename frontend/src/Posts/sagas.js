import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../Api';
import {
  REQUEST_UPVOTE,
  REQUEST_POSTS,
  LOAD_POSTS,
  UPDATE_LOCAL_POST
 } from './actions';

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
    const post = yield call(Api.upVote, action.postId);
    yield put({type: UPDATE_LOCAL_POST, post})
  } catch (e) {
    console.error(REQUEST_UPVOTE, e)
  }
}

function* postsSaga() {
  yield takeLatest(REQUEST_POSTS, fetchPosts);
  yield takeEvery(REQUEST_UPVOTE, upVote);
}

export default postsSaga;
