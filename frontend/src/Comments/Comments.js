import React, { Component } from 'react';
import CommentListItem from './CommentListItem'

class Comments extends Component {
  render() {
    return(
      <div>
        Comments
        {this.props.comments.map((comment) => <CommentListItem key={comment.id} {...comment} />)}
      </div>
    )
  }
}

export default Comments;