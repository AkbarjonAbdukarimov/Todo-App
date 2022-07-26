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
      <li>
        <p className="item">{this.props.task}</p>
        {/* <button onClick={this.handleEdit}>Edit</button> */}
        <div>
          <i className="fa fa-pen"></i>
          <i className="fa fa-trash" onClick={this.handleDelete}></i>
        </div>
      </li>
    );
  }
}
export default Todo;
