import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

// PropTypes
Todo.propTypes = {
    todo: PropTypes.object.isRequired
}

