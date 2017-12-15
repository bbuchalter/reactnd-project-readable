import React, { Component } from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { requestCommentUpVote, requestCommentDownVote } from './actions';
import { connect } from 'react-redux';

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
          <RaisedButton label="Edit" />
          <RaisedButton label="Delete" />
        </CardActions>
      </Card>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    requestCommentUpVote: (data) => dispatch(requestCommentUpVote(data)),
    requestCommentDownVote: (data) => dispatch(requestCommentDownVote(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListItem);