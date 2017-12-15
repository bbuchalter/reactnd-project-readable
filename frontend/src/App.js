import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import Posts from './Posts/index.js';
import PostDetail from './Posts/show.js';
import { Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
      </Drawer>

      <Paper>
        <Route exact path="/" component={Posts} />
        <Route exact path="/:category" component={Posts} />
        <Route path="/:category/:postId" component={PostDetail} />
      </Paper>
    </div>
    );
  }
}

export default App;
