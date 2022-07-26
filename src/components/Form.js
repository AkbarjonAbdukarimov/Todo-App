import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { task: "" };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ task: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Enter Task"
            onChange={this.handleChange}
            value={this.state.task}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
export default Form;
