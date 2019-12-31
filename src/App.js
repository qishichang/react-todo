import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import uuid from 'uuid';

import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [
      { id: uuid(), title: 'Take out the trash', completed: false },
      {
        id: uuid(),
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: uuid(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  };

  // Toggle Complete
  markComplete = id => {
    this.setState(preState => ({
      todos: [
        ...preState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      ]
    }));
  };

  // Delete Todo
  delTodo = id => {
    this.setState(preState => ({
      todos: [
        ...preState.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    }));
  };

  // Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    };

    this.setState(preState => ({
      todos: [...preState.todos, newTodo]
    }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </>
              )}
            />
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
