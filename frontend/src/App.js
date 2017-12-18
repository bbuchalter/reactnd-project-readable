import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import Posts from './Posts/index.js';
import PostDetail from './Posts/show.js';
import { Switch, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PostForm from './Posts/new';
import NewCommentPage from './Comments/new';
import EditCommentPage from './Comments/edit';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  appName = "Readable"

  render() {
    return (
      <div>
        <AppBar
        title={this.appName}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonClick={this.toggleDrawer}
      />

      <Drawer
        docked={false}
        width={300}
        onRequestChange={this.toggleDrawer}
        open={this.state.open}
      >
        <AppBar title={this.appName} onLeftIconButtonClick={this.toggleDrawer} />
        <MenuItem
          primaryText="All Posts"
          containerElement={<Link to="/" />}
          onClick={() => this.toggleDrawer()}
        />
        <MenuItem
          primaryText="Create Post"
          containerElement={<Link to="/posts/new" />}
          onClick={() => this.toggleDrawer()}
        />
      </Drawer>

      <Paper>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts/new" component={PostForm} />
          <Route exact path="/:category" component={Posts} />
          <Route exact path="/:category/:postId" component={PostDetail} />
          <Route exact path="/:category/:postId/comments/new" component={NewCommentPage} />
          <Route exact path="/:category/:postId/comments/:commentId/edit" component={EditCommentPage} />
        </Switch>
      </Paper>
    </div>
    );
  }
}

export default App;
