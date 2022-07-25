import React, { Component } from "react";
import Todo from "./Todo";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Clean House", status: false, id: uuidv4() }],
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(task) {
    if (task.task.length > 0) {
      const newTask = { ...task, status: false, id: uuidv4() };
      this.setState((st) => ({ todos: [...st.todos, newTask] }));
    } else alert("You Cannot Submit Empty Task!!!");
  }
  render() {
    return (
      <div>
        {this.state.todos.map((todo) => (
          <Todo key={todo.id} task={todo.task} />
        ))}
        <Form addTodo={this.addTodo} />
      </div>
    );
  }
}
export default TodoList;
