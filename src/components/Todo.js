import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleForm: false, task: this.props.task };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleEdit(e) {
    const { id, status } = this.props;
    e.preventDefault();
    this.setState({ toggleForm: false });
    this.props.update({ id, status, task: this.state.task });
  }
  handleDelete() {
    this.props.delete(this.props.id);
  }
  render() {
    return (
      <li>
        {this.state.toggleForm ? (
          <form onSubmit={this.handleEdit}>
            <input
              type="text"
              name="task"
              placeholder="Enter Task"
              onChange={this.handleChange}
              value={this.state.task}
            />
            <button>Edit</button>
          </form>
        ) : (
          <>
            <p
              className={`item ${this.props.status && "done"}`}
              onClick={() => {
                this.props.update({
                  task: this.state.task,
                  id: this.props.id,
                  status: !this.props.status,
                });
              }}
            >
              {this.props.task}
            </p>
            <div>
              <i
                className="fa fa-pen"
                onClick={() => {
                  this.setState({ toggleForm: true });
                }}
              ></i>
              <i className="fa fa-trash" onClick={this.handleDelete}></i>
            </div>
          </>
        )}
      </li>
    );
  }
}
export default Todo;
