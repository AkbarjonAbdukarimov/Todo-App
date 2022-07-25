import React, { Component } from "react";
class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.task}</p>
      </div>
    );
  }
}
export default Todo;
