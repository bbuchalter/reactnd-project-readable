import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../Api';
import {
  LOAD_COMMENTS,
  REQUEST_COMMENTS,
 } from './actions';

function* fetchComments(action) {
  try {
    const comments = yield call(Api.fetchComments, action.postId);
    yield put({type: LOAD_COMMENTS, comments});
  } catch (e) {
    console.error(REQUEST_COMMENTS, e)
  }
}

function* commentsSaga() {
  yield takeLatest(REQUEST_COMMENTS, fetchComments);
}

export default commentsSaga;
