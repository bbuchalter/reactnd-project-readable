import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';
import Posts from './Posts/index.js';
import PostDetail from './Posts/show.js';
import { Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

const style = {
  width: '80%',
  margin: '0 auto',
}

class App extends Component {
  render() {
    return (
      <Paper style={style}>
        <AppBar
          title="Readable"
        />
        <Route exact path="/" component={Posts} />
        <Route path="/:category/:postId" component={PostDetail} />
      </Paper>
    );
  }
}

export default App;
