import React, { Component } from 'react';
import CommentListItem from './CommentListItem'
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Comments extends Component {
  render() {
    const appBarStyle = {
      backgroundColor: this.props.muiTheme.palette.primary3Color
    }

    return(
      <div>
        <AppBar
          title={`Comments (${this.props.comments.length})`}
          style={appBarStyle}
          showMenuIconButton={false}
        />
        <Paper>
          {this.props.comments.map((comment) => <CommentListItem key={comment.id} {...comment} />)}
        </Paper>
      </div>
    )
  }
}

export default muiThemeable()(Comments);