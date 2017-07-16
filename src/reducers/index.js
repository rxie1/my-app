/**
 * Created by ray.xie on 2017-07-15.
 */

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISBILITY_FILTER,
  VisibilityFilters
} from '../actions/index'

const { SHOW_ALL } = VisibilityFilters

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp