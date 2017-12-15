import React, { Component } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import PostListItem from './PostListItem';
import { requestPost, requestUpVote, requestDownVote } from './actions';
import { connect } from 'react-redux';

class PostDetail extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.requestPost(match.params.postId)
  }

  render() {
    const { match, posts } = this.props;
    const post = posts[match.params.postId];
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <RaisedButton label="Create Post" />
          </ToolbarGroup>
        </Toolbar>
        { post && <PostListItem
          key={post.id}
          category={post.category}
          postId={post.id}
          title={post.title}
          voteScore={post.voteScore}
          author={post.author}
          commentCount={post.commentCount}
          timestamp={post.timestamp}
          upVote={this.props.requestUpVote}
          downVote={this.props.requestDownVote}
        /> }
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return { posts }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPost: (postId) => dispatch(requestPost(postId)),
    requestUpVote: (data) => dispatch(requestUpVote(data)),
    requestDownVote: (data) => dispatch(requestDownVote(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);