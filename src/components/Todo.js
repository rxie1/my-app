/**
 * Created by ray.xie on 2017-07-15.
 */

import React from 'react'
import ProTypes from 'prop-types'

const Todo = ({ onClick, completed, text}) => (
    <li
        onclick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

Todo.propTypes = {
    coClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo