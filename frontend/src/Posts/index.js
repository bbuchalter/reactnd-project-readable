import React, { Component } from 'react';
import PostListItem from './PostListItem';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import SortIcon from 'material-ui/svg-icons/content/sort';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      sortBy: 'rank'
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
        <AppBar
          title={`All Posts (${this.state.posts.length})`}
        />
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <RaisedButton label="Create Post" />
            <IconMenu
              iconButtonElement={<IconButton><SortIcon /></IconButton>}
              value={this.state.rank}
            >
              <MenuItem value="rank" primaryText="Sort by Rank" />
              <MenuItem value="date" primaryText="Sort by Date" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        {
          this.state.posts.map((post, index) => <PostListItem
            key={post.id}
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