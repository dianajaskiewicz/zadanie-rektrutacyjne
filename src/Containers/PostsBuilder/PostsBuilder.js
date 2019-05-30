import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as postActions from '../../store/actions/posts';
import Post from '../../Components/Post/Post';
import button from '../../Components/UI/Button/Button';
const divStyle = {
  color: 'black',
  border: '2px solid black',
  margin: '10px',
  width: '48%',
  display: 'inline-block',
  padding: '15px',
};
export class PostsBuilder extends Component {
  state = {
    elementsPerPage: 20,
    currentPage: 0,
  }
  componentDidMount() {
    this.props.onFetchPosts();
  }

  calculatePages = (postCount) => {
      const pagesNumbers = parseInt(postCount)/parseInt(this.state.elementsPerPage);
      return pagesNumbers;
  }

  changePage = (pageNumber) => {
    this.setState({currentPage: pageNumber})
  }

  render() {
    const pagesButtons = [];
    if(this.props.posts.length > 0) {
       const pagesNumbers = this.calculatePages(this.props.posts.length);
       for(let i=0; i<pagesNumbers; i++) {
          pagesButtons.push(<button key={'page-num'+i}
          onClick={() => this.changePage(i)}>{i+1}</button>);
       }
    }
    const posts = this.props.posts.slice(this.state.elementsPerPage*(this.state.currentPage), (this.state.currentPage+1)*(this.state.elementsPerPage)).map(post =>(
      <div style={divStyle} key={post.id}>
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          email={post.email}
          id={post.id}
          comments = {post.comments}
          clicked={this.props.onRemoveComment}
          sendComment={this.props.onSendcomment}
          loading={this.props.loading} />
        <button key={'buton-'+post.id} onClick={() => this.props.onFetchComments(post.id)}>Pokaż komentarze</button>
      </div>
    ))
    return (
      <div>
        <div>
          {pagesButtons}
        </div>
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts : () => dispatch(postActions.fetchPosts()),
    onFetchComments: (id) => dispatch(postActions.fetchComments(id)),
    onRemoveComment: (postID, id) => dispatch(postActions.removeComment(postID, id)),
    onSendcomment: (name,body, email, idPost) => dispatch(postActions.saveCommentToPost(name,body, email, idPost)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsBuilder);
