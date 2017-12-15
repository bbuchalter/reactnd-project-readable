import React, { Component } from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class CommentListItem extends Component {
  render() {
    return(
      <Card>
        <CardHeader
          title={this.props.body}
          subtitle={`by ${this.props.author} | ${this.props.voteScore} points`}
        />
        <CardActions>
          <RaisedButton label="Vote Up" />
          <RaisedButton label="Vote Down" />
          <RaisedButton label="Edit" />
          <RaisedButton label="Delete" />
        </CardActions>
      </Card>
    )
  }
}

export default CommentListItem;