import React, { Component } from 'react';
import { createComment } from './actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './CommentForm';

class NewCommentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author: '',
    }
  }

  handleSubmit(event) {
    const { postId, category } = this.props.match.params;
    this.props.createComment({
      ...this.state,
      parentId: postId
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
    createComment: (data) => dispatch(createComment(data)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NewCommentPage));