import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

