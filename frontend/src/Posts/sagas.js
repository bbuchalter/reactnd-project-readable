import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../Api';
import {
  REQUEST_POST_UPVOTE,
  REQUEST_DOWNVOTE,
  REQUEST_POSTS,
  REQUEST_POST,
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

function* fetchPost(action) {
  try {
    const post = yield call(Api.fetchPost, action.postId)
    yield put({type: UPDATE_LOCAL_POST, post});
  } catch (e) {
    console.error(REQUEST_POST, e)
  }
}

function* upVote(action) {
  try {
    const post = yield call(Api.vote, action.postId, "upVote");
    yield put({type: UPDATE_LOCAL_POST, post})
  } catch (e) {
    console.error(REQUEST_POST_UPVOTE, e)
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
  yield takeLatest(REQUEST_POST, fetchPost);
  yield takeEvery(REQUEST_POST_UPVOTE, upVote);
  yield takeEvery(REQUEST_DOWNVOTE, downVote);
}

export default postsSaga;
