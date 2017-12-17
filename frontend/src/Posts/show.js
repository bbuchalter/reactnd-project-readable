import React, { Component } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import PostListItem from './PostListItem';
import { requestPost, requestPostUpVote, requestPostDownVote } from './actions';
import { requestComments } from '../Comments/actions';
import { connect } from 'react-redux';
import Comments from '../Comments/Comments';
import { Link } from 'react-router-dom';

class PostDetail extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.requestPost(match.params.postId)
    this.props.requestComments(match.params.postId)
  }

  render() {
    const post = this.props.posts[this.props.match.params.postId];
    const commentsForPost = Object.values(this.props.comments).filter((comment) => {
      return(comment.parentId === post.id && !comment.deleted)
    });

    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <RaisedButton containerElement={<Link to="/posts/new" />} label="Create Post" />
            { post && <RaisedButton containerElement={<Link to={`/${post.category}/${post.id}/comments/new`} />} label="Create Comment" /> }
          </ToolbarGroup>
        </Toolbar>
        { post && !post.deleted && <PostListItem
          key={post.id}
          upVote={this.props.requestPostUpVote}
          downVote={this.props.requestPostDownVote}
          {...post}
        >
          <Comments comments={commentsForPost} />
        </PostListItem>
        }
        { post && post.deleted &&
          <h2>This Post Has Been Deleted</h2>
        }
        { !post && <h2>No Post Found Here</h2> }
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
    requestPostDownVote: (data) => dispatch(requestPostDownVote(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);