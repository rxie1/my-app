/**
 * Created by ray.xie on 2017-07-15.
 */

import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList/>
        <Footer/>
    </div>
)

export default App