import React, { Component } from 'react';
import { editComment } from './actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './CommentForm';

class EditCommentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author: '',
    }
  }

  handleSubmit(event) {
    const { postId, category, commentId } = this.props.match.params;
    this.props.editComment({
      ...this.state,
      commentId
    });
    this.props.history.push(`/${category}/${postId}`);
  }

  render() {
    return (
      <CommentForm
        handleSubmit={(e) => this.handleSubmit(e)}
        onAuthorChange={(e) => this.setState({author: e.target.value})}
        onBodyChange={(e) => this.setState({body: e.target.value})}
        author={this.state.author}
        body={this.state.body}
      />
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    editComment: (data) => dispatch(editComment(data)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(EditCommentPage));