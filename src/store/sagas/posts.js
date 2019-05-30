import { put } from 'redux-saga/effects';
import * as actions from '../actions/posts';
import axios from 'axios';

export function* fetchPostsSaga(action) {
  try {
    const response = yield axios.get('https://jsonplaceholder.typicode.com/posts');
    const fetchedPosts = [];
    for(let key in response.data) {
        fetchedPosts.push({
          ...response.data[key],
        })
      }
      yield put(actions.fetchedSuccess(fetchedPosts));
    } catch (error) {
      alert(error);
  }
}

export function* fetchCommentsSaga(action) {
  yield put(actions.fetchCommentsStart(action.id));
  try {
    const response = yield axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + action.id);
    const fetchedComments = [];
    for(let key in response.data) {
      fetchedComments.push({
        id: action.id,
        ...response.data[key],
      })
    }
    yield put(actions.fetchCommentsSuccess(fetchedComments, action.id));
    yield put(actions.finishFetchingComments())
  } catch (error) {
    alert(error);
  }
}
export function* saveCommentToPostSaga(action) {
   let postedCommentsId = [];
   let catchedPosts = yield localStorage.getItem('postID');
   if(!catchedPosts) {
      postedCommentsId.push(action.postID);
      yield localStorage.setItem('postID', JSON.stringify(postedCommentsId));
      yield put(actions.sendComment(action.name, action.body, action.email, action.postID))
   }
   else {
     postedCommentsId = yield JSON.parse(localStorage.getItem('postID'));
     const wasCommented = postedCommentsId.includes(action.postID);
     if(wasCommented) {
       alert('Nie możesz dodać dwóch komentarzy do jednego posta!');
     } else {
         postedCommentsId.push(action.postID);
         yield put(actions.sendComment(action.name, action.body, action.email, action.postID))
         yield localStorage.setItem('postID', JSON.stringify(postedCommentsId));
     }
   }
}
