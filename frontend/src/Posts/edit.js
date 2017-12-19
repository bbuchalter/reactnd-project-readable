import React, { Component } from 'react';
import { requestCategories } from '../Categories/actions';
import { requestPost, updatePost } from './actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './PostForm';

class EditPostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || '',
      body: this.props.body || '',
      author: this.props.author || '',
      category: this.props.category || '',
    }
  }

  componentDidMount() {
    const { match } = this.props;
    this.props.requestPost(match.params.postId)
    this.props.requestCategories();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      body: nextProps.body,
      author: nextProps.author,
      category: nextProps.category,
    })
  }

  handleSubmit() {
    const { postId } = this.props.match.params;
    this.props.updatePost({
      postId,
      post: this.state,
    });
    this.props.history.push('/');
  }

  render() {
    return (
      <PostForm
        handleSubmit={(e) => this.handleSubmit()}
        onTitleChange={(e) => this.setState({title: e.target.value})}
        onAuthorChange={(e) => this.setState({author: e.target.value})}
        onCategoryChange={(event, index, value) => this.setState({category: value})}
        onBodyChange={(e) => this.setState({body: e.target.value})}
        categories={this.props.categories}
        title={this.state.title}
        author={this.state.author}
        body={this.state.body}
        category={this.state.category}
      />
    )
  }
}

function mapStateToProps ({ posts, categories }, ownProps) {
  return {
    ...posts[ownProps.match.params.postId],
    categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPost: (postId) => dispatch(requestPost(postId)),
    requestCategories: () => dispatch(requestCategories()),
    updatePost: (data) => dispatch(updatePost(data)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostPage));