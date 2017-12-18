import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class PostForm extends Component {
  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <RaisedButton label="Save Post" onClick={this.props.handleSubmit} />
          </ToolbarGroup>
        </Toolbar>
        <Paper>
          <TextField
            floatingLabelText="Title"
            value={this.props.title}
            onChange={this.props.onTitleChange}
          /><br/>
          <TextField
            floatingLabelText="Author"
            value={this.props.author}
            onChange={this.props.onAuthorChange}
          /><br/>
          <SelectField
            floatingLabelText="Category"
            value={this.props.category}
            onChange={this.props.onCategoryChange}
          >
              {this.props.categories.map((category) => {
                return (
                  <MenuItem
                    key={category.path}
                    primaryText={category.name}
                    value={category.path}
                  />
                )
              })}
          </SelectField><br />
          <TextField
            floatingLabelText="Body"
            multiLine={true}
            value={this.props.body}
            onChange={this.props.onBodyChange}
          /><br/>
        </Paper>
      </div>
    )
  }
}
export default PostForm;