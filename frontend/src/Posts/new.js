import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
      category: '',
    }
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <RaisedButton label="Save Post" />
          </ToolbarGroup>
        </Toolbar>
        <Paper>
          <TextField
            floatingLabelText="Title"
            value={this.state.title}
            onChange={(e) => this.setState({title: e.target.value})}
          /><br/>
          <TextField
            floatingLabelText="Author"
            value={this.state.author}
            onChange={(e) => this.setState({author: e.target.value})}
          /><br/>
          <SelectField
            floatingLabelText="Category"
            value={this.state.category}
            onChange={(event, index, value) => this.setState({category: value})}
          >
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField><br />
          <TextField
            floatingLabelText="Body"
            multiLine={true}
            value={this.state.body}
            onChange={(e) => this.setState({body: e.target.value})}
          /><br/>
        </Paper>
      </div>
    )
  }
}

export default PostForm;