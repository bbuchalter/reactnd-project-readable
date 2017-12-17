import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { createComment } from './actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author: '',
    }
  }

  handleSubmit(event) {
    const { postId, category } = this.props.match.params;
    this.props.createComment({
      ...this.state,
      parentId: postId
    });
    this.props.history.push(`/${category}/${postId}`);
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <RaisedButton label="Save Comment" onClick={(e) => this.handleSubmit(e)} />
          </ToolbarGroup>
        </Toolbar>
        <Paper>
          <TextField
            floatingLabelText="Your Name"
            value={this.state.author}
            onChange={(e) => this.setState({author: e.target.value})}
          /><br/>
          <TextField
            floatingLabelText="Your Comment"
            multiLine={true}
            value={this.state.body}
            onChange={(e) => this.setState({body: e.target.value})}
          /><br/>
        </Paper>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createComment: (data) => dispatch(createComment(data)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CommentForm));