import React, { Component } from 'react';
import PostListItem from './PostListItem';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import SortIcon from 'material-ui/svg-icons/content/sort';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import { requestPosts, requestPostUpVote, requestPostDownVote } from './actions';
import { requestCategories } from '../Categories/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'rank'
    }
  }

  componentDidMount() {
    this.props.requestPosts()
    this.props.requestCategories()
  }

  allPosts = () => {
    const category = this.props.match.params.category;
    const allPosts = Object.values(this.props.posts);
    if(category) {
      const postsForCategory = allPosts.filter((post) => post.category === category)
      return postsForCategory;
    } else {
      return allPosts;
    }
  }

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
            <IconMenu
              iconButtonElement={<IconButton><ContentFilter /></IconButton>}
            >
                <MenuItem
                  primaryText="All Posts"
                  containerElement={<Link to="/" />}
                />
              {this.props.categories.map((category) => {
                return (
                  <MenuItem
                    key={category.path}
                    primaryText={category.name}
                    containerElement={<Link to={`/${category.path}`} />}
                  />
                )
              })}
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
        {
          this.allPosts().length > 0 && this.sortedPosts().map((post) => <PostListItem
            key={post.id}
            upVote={this.props.requestPostUpVote}
            downVote={this.props.requestPostDownVote}
            {...post}
            />)
        }
        { this.allPosts().length === 0 && <h2>Sorry, no posts here!</h2>}
      </div>
    )
  }
}

function mapStateToProps ({ posts, categories }) {
  return { posts, categories }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPosts: () => dispatch(requestPosts()),
    requestCategories: () => dispatch(requestCategories()),
    requestPostUpVote: (data) => dispatch(requestPostUpVote(data)),
    requestPostDownVote: (data) => dispatch(requestPostDownVote(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);