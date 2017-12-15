import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../Api';
import {
  REQUEST_POST_UPVOTE,
  REQUEST_POST_DOWNVOTE,
  REQUEST_POSTS,
  REQUEST_POST,
  LOAD_POSTS,
  UPDATE_LOCAL_POST,
  CREATE_POST,
  DELETE_POST,
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
    const post = yield call(Api.postVote, action.postId, "upVote");
    yield put({type: UPDATE_LOCAL_POST, post})
  } catch (e) {
    console.error(REQUEST_POST_UPVOTE, e)
  }
}

function* downVote(action) {
  try {
    const post = yield call(Api.postVote, action.postId, "downVote");
    yield put({type: UPDATE_LOCAL_POST, post})
  } catch (e) {
    console.error(REQUEST_POST_DOWNVOTE, e)
  }
}

function* createPost(action) {
  try {
    const post = yield call(Api.createPost, action.post)
    yield put({type: UPDATE_LOCAL_POST, post})
  } catch (e) {
    console.error(CREATE_POST, e)
  }
}

function* deletePost(action) {
  try {
    const post = yield call(Api.deletePost, action.postId)
    yield put({type: UPDATE_LOCAL_POST, post})
  } catch (e) {
    console.error(DELETE_POST, e)
  }
}

function* postsSaga() {
  yield takeLatest(REQUEST_POSTS, fetchPosts);
  yield takeLatest(REQUEST_POST, fetchPost);
  yield takeEvery(REQUEST_POST_UPVOTE, upVote);
  yield takeEvery(REQUEST_POST_DOWNVOTE, downVote);
  yield takeLatest(CREATE_POST, createPost);
  yield takeEvery(DELETE_POST, deletePost);
}

export default postsSaga;
