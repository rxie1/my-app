/**
 * Created by ray.xie on 2017-07-15.
 */

import React from 'react'
import FilterLink from  '../containers/FilterLink'

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
        {', '}
        <FilterLink FILTER="SHOW_NONE">
            Hidden All
        </FilterLink>

    </p>
)

export default Footer
