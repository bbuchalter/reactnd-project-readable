import React, { Component } from 'react';
import './App.css';
import Paper from 'material-ui/Paper';

const style = {
  width: '80%',
  margin: '0 auto',
}

class App extends Component {
  render() {
    return (
      <Paper style={style}>
        <h1>Readable</h1>
      </Paper>
    );
  }
}

export default App;
