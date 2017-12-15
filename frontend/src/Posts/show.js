import React, { Component } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import PostListItem from './PostListItem';
import { requestPost, requestPostUpVote, requestDownVote } from './actions';
import { requestComments } from '../Comments/actions';
import { connect } from 'react-redux';
import Comments from '../Comments/Comments';

class PostDetail extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.requestPost(match.params.postId)
    this.props.requestComments(match.params.postId)
  }

  render() {
    const post = this.props.posts[this.props.match.params.postId];
    const commentsForPost = Object.values(this.props.comments).filter((comment) => {
      return(comment.parentId === post.id)
    });

    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <RaisedButton label="Create Post" />
          </ToolbarGroup>
        </Toolbar>
        { post && <PostListItem
          key={post.id}
          upVote={this.props.requestPostUpVote}
          downVote={this.props.requestDownVote}
          {...post}
        >
          <Comments comments={commentsForPost} />
        </PostListItem>
        }
      </div>
    )
  }
}

function mapStateToProps ({ posts, comments }) {
  return { posts, comments }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPost: (postId) => dispatch(requestPost(postId)),
    requestComments: (postId) => dispatch(requestComments(postId)),
    requestPostUpVote: (data) => dispatch(requestPostUpVote(data)),
    requestDownVote: (data) => dispatch(requestDownVote(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);