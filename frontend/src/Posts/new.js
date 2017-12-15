import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { requestCategories } from '../Categories/actions';
import { createPost } from './actions';
import { connect } from 'react-redux';

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

  componentDidMount() {
    this.props.requestCategories();
  }

  handleSubmit(event) {
    this.props.createPost(this.state);
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <RaisedButton label="Save Post" onClick={(e) => this.handleSubmit(e)} />
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
            value={this.state.body}
            onChange={(e) => this.setState({body: e.target.value})}
          /><br/>
        </Paper>
      </div>
    )
  }
}

function mapStateToProps ({ categories }) {
  return { categories }
}

function mapDispatchToProps (dispatch) {
  return {
    requestCategories: () => dispatch(requestCategories()),
    createPost: (data) => dispatch(createPost(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);