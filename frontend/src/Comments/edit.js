import React, { Component } from 'react';
import { editComment } from './actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from './CommentForm';
import { requestComments } from './actions';

class EditCommentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.body || '',
      author: this.props.author || '',
    }
  }

  componentDidMount() {
    const { match } = this.props;
    this.props.requestComments(match.params.postId)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      body: nextProps.body,
      author: nextProps.author
    })
  }

  handleSubmit() {
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
        handleSubmit={(e) => this.handleSubmit()}
        author={this.state.author}
        body={this.state.body}
        onAuthorChange={(e) => this.setState({author: e.target.value})}
        onBodyChange={(e) => this.setState({body: e.target.value})}
      />
    )
  }
}

function mapStateToProps({ comments }, ownProps) {
  const { commentId } = ownProps.match.params;
  return { ...comments[commentId] }
}

function mapDispatchToProps (dispatch) {
  return {
    editComment: (data) => dispatch(editComment(data)),
    requestComments: (postId) => dispatch(requestComments(postId)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCommentPage));