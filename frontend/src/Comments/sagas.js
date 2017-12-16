import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../Api';
import {
  LOAD_COMMENTS,
  REQUEST_COMMENTS,
  REQUEST_COMMENT_UPVOTE,
  REQUEST_COMMENT_DOWNVOTE,
  UPDATE_LOCAL_COMMENT,
  REQUEST_DELETE_COMMENT,
 } from './actions';

function* fetchComments(action) {
  try {
    const comments = yield call(Api.fetchComments, action.postId);
    yield put({type: LOAD_COMMENTS, comments});
  } catch (e) {
    console.error(REQUEST_COMMENTS, e)
  }
}

function* upVote(action) {
  try {
    const comment = yield call(Api.commentVote, action.commentId, "upVote");
    yield put({type: UPDATE_LOCAL_COMMENT, comment})
  } catch (e) {
    console.error(REQUEST_COMMENT_UPVOTE, e)
  }
}

function* downVote(action) {
  try {
    const comment = yield call(Api.commentVote, action.commentId, "downVote");
    yield put({type: UPDATE_LOCAL_COMMENT, comment})
  } catch (e) {
    console.error(REQUEST_COMMENT_DOWNVOTE, e)
  }
}

function* deleteComment(action) {
  try {
    const comment = yield call(Api.deleteComment, action.commentId);
    yield put({type: UPDATE_LOCAL_COMMENT, comment})
  } catch (e) {
    console.error(REQUEST_DELETE_COMMENT, e)
  }
}

function* commentsSaga() {
  yield takeLatest(REQUEST_COMMENTS, fetchComments);
  yield takeEvery(REQUEST_COMMENT_UPVOTE, upVote);
  yield takeEvery(REQUEST_COMMENT_DOWNVOTE, downVote);
  yield takeEvery(REQUEST_DELETE_COMMENT, deleteComment);
}

export default commentsSaga;
