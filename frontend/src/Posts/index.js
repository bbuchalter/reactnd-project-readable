import React, { Component } from 'react';
import PostListItem from './PostListItem';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import SortIcon from 'material-ui/svg-icons/content/sort';
import { requestPosts, requestPostUpVote, requestPostDownVote } from './actions';
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
          this.sortedPosts().map((post) => <PostListItem
            key={post.id}
            upVote={this.props.requestPostUpVote}
            downVote={this.props.requestPostDownVote}
            {...post}
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
    requestPostUpVote: (data) => dispatch(requestPostUpVote(data)),
    requestPostDownVote: (data) => dispatch(requestPostDownVote(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);