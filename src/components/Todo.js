import React, { Component } from "react";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = -this.handleEdit.bind(this);
  }
  handleEdit() {}
  handleDelete() {
    this.props.delete(this.props.id);
  }
  render() {
    return (
      <div>
        <p>{this.props.task}</p>
        {/* <button onClick={this.handleEdit}>Edit</button> */}
        <button onClick={this.handleDelete}>X</button>
      </div>
    );
  }
}
export default Todo;
