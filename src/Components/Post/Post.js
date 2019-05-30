import React from 'react';
import Comment from './Comment/Comment';
import CommentForm from './Comment/CommentForm/CommentForm';

const post = (props) => {
  let comments = null;
  let form = null;
  if(props.comments) {
    if(props.loading) {
      comments = (<p style={{fontSize: '70px'}}>Ładowanie</p>);
      form = null;
    } else {
      comments = props.comments.map(comment=>{
       return (
         <Comment
         key={comment.id}
         title={comment.name}
         body={comment.body}
         clicked={props.clicked}
         idPost={props.id}
         id={comment.id}
         email={comment.email} />
       )
     })
    form = <CommentForm clicked={props.sendComment} idPost={props.id} />
    }
  }
  return (
      <article>
          <h1>{props.title}</h1>
          <div>
              <div>{props.body}
              {comments}
              {form}
              </div>
          </div>
      </article>
    )
  }

export default post;
