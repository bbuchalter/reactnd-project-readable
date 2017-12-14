import React, { Component } from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

class PostDetail extends Component {
  render() {
    return (
      <div>
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