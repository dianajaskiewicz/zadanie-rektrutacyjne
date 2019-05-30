import React, { Component } from 'react';
import button from '../../../UI/Button/Button';

const formStyle={
  marginTop: '20px',
  marginBottom: '20px',
}

class CommentForm  extends Component {
  state = {
    name: '',
    body: '',
    email: '',
  }

  changeInputHandler = (e, type) => {
    this.setState({
      [type] : e.target.value,
    })
  }
  render() {
    return (
      <form style={formStyle}>
        <input id="name" type="text" placeholder="Imię" name="name" value={this.state.name} onChange={(e) => this.changeInputHandler(e, 'name')} />
        <input id="body" type="text" placeholder="Treść" name="body" value={this.state.body} onChange={(e) => this.changeInputHandler(e, 'body')} />
        <input id="email" type="text" placeholder="Email" name="body" value={this.state.email} onChange={(e) => this.changeInputHandler(e, 'email')} />
        <button onClick={(e) => {
            e.preventDefault();
            this.props.clicked(this.state.name, this.state.body, this.state.email, this.props.idPost)
            this.setState((prevState) => {return {  name: '',  body: '', email: '',}})
          }
        }>Wyślij komentarz</button>
      </form>
    )
  }

}
export default CommentForm;
