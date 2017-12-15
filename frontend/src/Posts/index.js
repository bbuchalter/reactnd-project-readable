import React, { Component } from 'react';
import PostListItem from './PostListItem';
import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import SortIcon from 'material-ui/svg-icons/content/sort';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import { requestPosts } from './actions';
import { requestCategories } from '../Categories/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'date'
    }
  }

  componentDidMount() {
    this.props.requestPosts()
    this.props.requestCategories()
  }

  allPosts = () => {
    const category = this.props.match.params.category;
    const allPosts = Object.values(this.props.posts);
    const notDeleted = allPosts.filter((post) => !post.deleted)
    if(category) {
      const postsForCategory = notDeleted.filter((post) => post.category === category)
      return postsForCategory;
    } else {
      return notDeleted;
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
            <RaisedButton containerElement={<Link to="/posts/new" />} label="Create Post" />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);