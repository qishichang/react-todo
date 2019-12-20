import React, { Component } from "react";
import Todo from "./Todo";

export default class Todos extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}
