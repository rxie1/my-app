/**
 * Created by ray.xie on 2017-07-15.
 */

import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClock }) => {
    if (active) {
        return <pan>{children}</pan>
    }

    return (
        <a
            href="#"
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: propTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export  default Link
