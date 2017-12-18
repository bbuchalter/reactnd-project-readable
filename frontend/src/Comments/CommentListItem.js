import React, { Component } from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { requestCommentUpVote, requestCommentDownVote, requestDeleteComment } from './actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CommentListItem extends Component {
  render() {
    return(
      <Card>
        <CardHeader
          title={this.props.body}
          subtitle={`by ${this.props.author} | ${this.props.voteScore} points`}
        />
        <CardActions>
          <RaisedButton label="Vote Up" onClick={(e) => this.props.requestCommentUpVote(this.props.id)} />
          <RaisedButton label="Vote Down" onClick={(e) => this.props.requestCommentDownVote(this.props.id)} />
          <RaisedButton label="Edit" containerElement={<Link to={`/${this.props.post.category}/${this.props.post.id}/comments/${this.props.id}/edit`} />}/>
          <RaisedButton label="Delete" onClick={(e) => this.props.requestDeleteComment(this.props.id)} />
        </CardActions>
      </Card>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestCommentUpVote: (data) => dispatch(requestCommentUpVote(data)),
    requestCommentDownVote: (data) => dispatch(requestCommentDownVote(data)),
    requestDeleteComment: (data) => dispatch(requestDeleteComment(data)),
  }
}

export default connect(null, mapDispatchToProps)(CommentListItem);