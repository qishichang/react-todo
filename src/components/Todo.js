import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  getStyle = () => ({
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: this.props.todo.completed ? 'line-through' : 'none'
  });
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <label>
            <input
              type="checkbox"
              checked={this.props.todo.completed}
              onChange={this.props.markComplete.bind(this, id)}
            />{' '}
            {title}
          </label>
        </p>
      </div>
    );
  }
}

// PropTypes
Todo.propTypes = {
  todo: PropTypes.object.isRequired
};
