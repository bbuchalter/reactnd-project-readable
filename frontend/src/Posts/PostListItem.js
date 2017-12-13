import React, { Component } from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class PostListItem extends Component {
  render() {
    const subtitle = `${this.props.voteScore} points
    | posted by ${this.props.author}
    | ${this.props.commentCount} comments
    | ${new Date(this.props.timestamp)}`

    return(
      <Card>
        <CardHeader
          title={this.props.title}
          subtitle={subtitle}
          avatar={`https://dummyimage.com/128x128/000/fff.png&text=${this.props.rank}`}
        />
        <CardActions>
          <RaisedButton label="Vote Up" onClick={(e) => this.props.upVote(this.props.postId)} />
          <RaisedButton label="Vote Down" onClick={(e) => this.props.downVote(this.props.postId)} />
          <RaisedButton label="Edit" />
          <RaisedButton label="Delete" />
        </CardActions>
      </Card>
    )
  }
}

export default PostListItem;