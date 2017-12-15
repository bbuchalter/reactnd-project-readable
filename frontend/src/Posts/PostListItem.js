import React, { Component } from 'react';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { deletePost, requestPostDownVote, requestPostUpVote } from './actions';
import { connect } from 'react-redux';

class PostListItem extends Component {
  render() {
    const subtitle = `${this.props.voteScore} points
    | posted by ${this.props.author}
    | ${this.props.commentCount} comments
    | ${new Date(this.props.timestamp)}`

    return(
      <Card>
        <Link to={`/${this.props.category}/${this.props.id}`}>
          <CardHeader
            title={this.props.title}
            subtitle={subtitle}
            avatar={`https://dummyimage.com/128x128/000/fff.png&text=${this.props.voteScore || 'Zero'}`}
          />
        </Link>
        <CardActions>
          <RaisedButton label="Vote Up" onClick={(e) => this.props.requestPostUpVote(this.props.id)} />
          <RaisedButton label="Vote Down" onClick={(e) => this.props.requestPostDownVote(this.props.id)} />
          <RaisedButton label="Edit" />
          <RaisedButton label="Delete" onClick={(e) => this.props.deletePost(this.props.id)} />
        </CardActions>
        { this.props.children }
      </Card>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPostUpVote: (data) => dispatch(requestPostUpVote(data)),
    requestPostDownVote: (data) => dispatch(requestPostDownVote(data)),
    deletePost: (data) => dispatch(deletePost(data)),
  }
}

export default connect(null, mapDispatchToProps)(PostListItem);