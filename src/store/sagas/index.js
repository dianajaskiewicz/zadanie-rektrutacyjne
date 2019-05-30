import { takeEvery, all } from 'redux-saga/effects';
import { fetchPostsSaga, fetchCommentsSaga, saveCommentToPostSaga } from './posts';
import * as actionTypes from '../actions/actionTypes';

export function* watchPosts() {
  yield takeEvery(actionTypes.FETCH_POSTS, fetchPostsSaga);
  yield takeEvery(actionTypes.FETCH_COMMENTS_START, fetchCommentsSaga);
  yield takeEvery(actionTypes.SAVE_COMMENT_TO_POST, saveCommentToPostSaga)
}
