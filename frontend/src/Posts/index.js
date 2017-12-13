import React, { Component } from 'react';
import PostListItem from './PostListItem';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import SortIcon from 'material-ui/svg-icons/content/sort';
import { loadPosts, upVote } from './actions';
import { connect } from 'react-redux';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.props.loadPosts(posts)
      })
  }

  sortedPosts = () => {
    const allPosts = Object.values(this.props.posts);
    switch(this.state.sortBy) {
      case 'rank':
        return allPosts.sort((a,b) => (b.voteScore-a.voteScore));
      case 'date':
        return allPosts.sort((a,b) => (b.timestamp-a.timestamp));
      default:
        return allPosts;
    }
  }

  setSort = (sortBy) => this.setState({sortBy});

  render() {
    return (
      <div>
        <AppBar
          title={`All Posts (${this.props.posts.length})`}
        />
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <RaisedButton label="Create Post" />
            <IconMenu
              iconButtonElement={<IconButton><SortIcon /></IconButton>}
              value={this.state.sortBy}
            >
              <MenuItem value="rank" primaryText="Sort by Rank" onClick={(e) => this.setSort("rank")} />
              <MenuItem value="date" primaryText="Sort by Date" onClick={(e) => this.setSort("date")} />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        {
          this.sortedPosts().map((post, index) => <PostListItem
            key={post.id}
            postId={post.id}
            rank={index+1}
            title={post.title}
            voteScore={post.voteScore}
            author={post.author}
            commentCount={post.commentCount}
            timestamp={post.timestamp}
            upVote={this.props.upVote}
            />)
        }
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return { posts }
}

function mapDispatchToProps (dispatch) {
  return {
    loadPosts: (data) => dispatch(loadPosts(data)),
    upVote: (data) => dispatch(upVote(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);