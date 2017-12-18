import React, { Component } from 'react';
import { requestCategories } from '../Categories/actions';
import { createPost } from './actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './PostForm';

class NewPostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
      category: '',
    }
  }

  componentDidMount() {
    this.props.requestCategories();
  }

  handleSubmit() {
    this.props.createPost(this.state);
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

function mapStateToProps ({ categories }) {
  return { categories }
}

function mapDispatchToProps (dispatch) {
  return {
    requestCategories: () => dispatch(requestCategories()),
    createPost: (data) => dispatch(createPost(data)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPostPage));