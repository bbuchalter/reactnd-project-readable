import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

class PostDetail extends Component {
  render() {
    return (
      <div>
        <AppBar
          title={`Showing a post`}
        />
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <RaisedButton label="Create Post" />
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}
export default PostDetail;