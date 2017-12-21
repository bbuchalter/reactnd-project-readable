import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class CommentForm extends Component {
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <RaisedButton label="Save Comment" onClick={this.props.handleSubmit} />
          </ToolbarGroup>
        </Toolbar>
        <Paper>
          <TextField
            floatingLabelText="Your Name"
            value={this.props.author}
            onChange={this.props.onAuthorChange}
          /><br/>
          <TextField
            floatingLabelText="Your Comment"
            multiLine={true}
            value={this.props.body}
            onChange={this.props.onBodyChange}
          /><br/>
        </Paper>
      </div>
    )
  }
}

export default CommentForm;