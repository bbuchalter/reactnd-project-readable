import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../Api';
import {
  REQUEST_UPVOTE,
  REQUEST_DOWNVOTE,
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
    const post = yield call(Api.vote, action.postId, "upVote");
    yield put({type: UPDATE_LOCAL_POST, post})
  } catch (e) {
    console.error(REQUEST_UPVOTE, e)
  }
}

function* downVote(action) {
  try {
    const post = yield call(Api.vote, action.postId, "downVote");
    yield put({type: UPDATE_LOCAL_POST, post})
  } catch (e) {
    console.error(REQUEST_DOWNVOTE, e)
  }
}

function* postsSaga() {
  yield takeLatest(REQUEST_POSTS, fetchPosts);
  yield takeEvery(REQUEST_UPVOTE, upVote);
  yield takeEvery(REQUEST_DOWNVOTE, downVote);
}

export default postsSaga;
