import React, { Component } from 'react';

class CommentListItem extends Component {
  render() {
    return(
      <div>
        {this.props.author}
        {this.props.voteScore}
        {this.props.body}
      </div>
    )
  }
}

export default CommentListItem;