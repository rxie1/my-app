/**
 * Created by ray.xie on 2017-07-15.
 */

import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
    </ul>
)

TodoList.PropTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList