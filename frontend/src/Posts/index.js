import React, { Component } from 'react';
import PostListItem from './PostListItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AppBar from 'material-ui/AppBar';


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let token = localStorage.token

    if (!token)
      token = localStorage.token = Math.random().toString(36).substr(-8)

    const headers = {
      'Accept': 'application/json',
      'Authorization': token
    }

    const url = "http://localhost:3001/posts"
    const options = {headers}
    fetch(url, options)
      .then(result => result.json())
      .then(posts => {
        this.setState(state => ({
          posts: posts
        }))
      })
  }

  actionButtons = <FloatingActionButton>
    <ContentAdd />
  </FloatingActionButton>

  render() {
    return (
      <div>
        <AppBar
          title={`All Posts (${this.state.posts.length})`}
          iconElementRight={this.actionButtons}
        />
        {
          this.state.posts.map((post, index) => <PostListItem
            rank={index+1}
            title={post.title}
            voteScore={post.voteScore}
            author={post.author}
            commentCount={post.commentCount}
            />)
        }
      </div>
    )
  }
}

export default Posts;