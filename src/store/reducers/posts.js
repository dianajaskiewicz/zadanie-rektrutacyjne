import * as actionTypes from '../actions/actionTypes';


const initialState = {
  loadingPostCommentID: '',
  posts : [],
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_SUCCESS :
      return {
        ...state,
        posts: action.fetchedPosts,
      }
    case actionTypes.FETCH_COMMENTS_SUCCESS :
    return {
      ...state,
      loadingPostCommentID: null,
      posts: state.posts.map(post => {
        if(post.id == action.id) {
          post = {...post, comments: action.fetchedComments,}
        }
        return post;
      })
    }
    case actionTypes.REMOVE_COMMENT :
    return {
      ...state,
      posts :
        state.posts.map(post => {
          if(action.postID == post.id) {
            post = {
              ...post,
              comments : post.comments.filter(comment => {
                if(comment.id !== action.id) {
                  return comment;
                }
              })
            }
        }
        return post;
      })
    }
    case actionTypes.SEND_COMMENTS :
    const catchedComment = {
      name: action.name,
      body: action.body,
      email: action.email,
      id: Math.random()*1000,
    }
      return {
        ...state,
         posts: state.posts.map(post => {
           if(post.id == action.postID) {
             let comments = post.comments;
             comments.push(catchedComment);
           }
           return post;
         })
      }
      case actionTypes.START_FETCHING_COMMENTS:
        return {
          ...state,
          loadingPostCommentID : action.postID,
        }
      case actionTypes.FINISH_FETCHING_COMMENTS:
        return {
          ...state,
          loadingPostCommentID: null,
        }
    }
    return state;
}
export default reducer;
