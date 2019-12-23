import React, { Component } from "react";
import PropTypes from 'prop-types'

import Todo from "./Todo";

export default class Todos extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ))}
      </div>
    );
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}
