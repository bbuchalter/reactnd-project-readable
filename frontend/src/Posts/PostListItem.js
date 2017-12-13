import React, { Component } from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class PostListItem extends Component {
  render() {
    return(
      <Card>
        <CardHeader
          title={this.props.title}
          subtitle={`${this.props.voteScore} points | posted by ${this.props.author} | ${this.props.commentCount} comments`}
          avatar={`https://dummyimage.com/128x128/000/fff.png&text=${this.props.rank}`}
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

export default PostListItem;