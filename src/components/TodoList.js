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
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  addTodo(task) {
    if (task.task.length > 0) {
      const newTask = { ...task, status: false, id: uuidv4() };
      this.setState((st) => ({ todos: [...st.todos, newTask] }));
    } else alert("You Cannot Submit Empty Task!!!");
  }
  delete(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  async update(todo) {
    const updatedTodos = this.state.todos.map((t) => {
      if (t.id === todo.id) {
        return { task: todo.task, id: todo.id, status: todo.status };
      }
      return t;
    });
    await this.setState({ todos: updatedTodos });
  }
  toggleCompletion(id) {}
  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              status={todo.status}
              delete={this.delete}
              update={this.update}
            />
          ))}
        </ul>
        <Form addTodo={this.addTodo} />
      </div>
    );
  }
}
export default TodoList;
