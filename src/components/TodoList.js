import React, { Component } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Clean House", status: false, id: uuidv4() }],
    };
  }
  render() {
    return this.state.todos.map((todo) => (
      <Todo key={todo.id} task={todo.task} />
    ));
  }
}
export default TodoList;
