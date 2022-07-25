import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Clean House", status: false, id: uuidv4() }],
    };
  }
}
