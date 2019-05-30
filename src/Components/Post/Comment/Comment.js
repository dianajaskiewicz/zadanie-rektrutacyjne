import React from 'react';

const commentSyle= {
  border: '2px solid black',
  width: '80%',
  margin: '0 auto',
  cursor: 'pointer',
}

const comment = (props) => {
  return (
    <div style={commentSyle} onClick={() => props.clicked(props.idPost, props.id)}>
      <p>Komentarz</p>
      <p><b>Tytuł:</b> {props.title}</p>
      <p><b>Treść: </b>{props.body}</p>
      <p><b>Email: </b>{props.email}</p>
    </div>
  );
}

export default comment;
