import * as actionTypes from './actionTypes';

export const fetchPosts = () => {
  return {
    type: actionTypes.FETCH_POSTS,
  }
}

export const fetchedSuccess = (fetchedPosts) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    fetchedPosts: fetchedPosts,
  }
}

export const fetchComments = (id) => {
  return {
    type: actionTypes.FETCH_COMMENTS_START,
    id: id,
  }
}

export const fetchCommentsSuccess = (fetchedComments, id) => {
  return {
    type: actionTypes.FETCH_COMMENTS_SUCCESS,
    fetchedComments: fetchedComments,
    id: id,
  }
}
export const removeComment = (postID, id) => {
  return {
    type: actionTypes.REMOVE_COMMENT,
    postID: postID,
    id: id,
  }
}

export const sendComment = (name,body, email, postID) => {
  return {
    type: actionTypes.SEND_COMMENTS,
    name: name,
    body: body,
    email: email,
    postID : postID,
  }
}
export const fetchCommentsStart = () => {
  return {
    type: actionTypes.START_FETCHING_COMMENTS,
  }
}
export const finishFetchingComments = () => {
  return {
    type: actionTypes.FINISH_FETCHING_COMMENTS,
  }
}
export const saveCommentToPost = (name,body, email, postID) => {
  return {
    type: actionTypes.SAVE_COMMENT_TO_POST,
    name: name,
    body: body,
    email: email,
    postID : postID,
  }
}
