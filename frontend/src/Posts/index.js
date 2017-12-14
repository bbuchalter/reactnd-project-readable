import React, { Component } from 'react';
import PostListItem from './PostListItem';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import SortIcon from 'material-ui/svg-icons/content/sort';
import { requestPosts, requestUpVote, requestDownVote } from './actions';
import { connect } from 'react-redux';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'rank'
    }
  }

  componentDidMount() {
    this.props.requestPosts()
  }

  allPosts = () => Object.values(this.props.posts);

  sortedPosts = () => {
    switch(this.state.sortBy) {
      case 'rank':
        return this.allPosts().sort((a,b) => (b.voteScore-a.voteScore));
      case 'date':
        return this.allPosts().sort((a,b) => (b.timestamp-a.timestamp));
      default:
        return this.allPosts();
    }
  }

  setSort = (sortBy) => this.setState({sortBy});

  render() {
    return (
      <div>
        <AppBar
          title={`All Posts (${this.allPosts().length})`}
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
            upVote={this.props.requestUpVote}
            downVote={this.props.requestDownVote}
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
    requestPosts: () => dispatch(requestPosts()),
    requestUpVote: (data) => dispatch(requestUpVote(data)),
    requestDownVote: (data) => dispatch(requestDownVote(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);