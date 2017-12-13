import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        <h2>All Posts ({this.state.posts.length})</h2>
        <ul>
          {
            this.state.posts.map((post) =>
              <li key={post.id}>{post.title}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Posts;