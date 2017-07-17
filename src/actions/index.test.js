/**
 * Created by ray.xie on 2017-07-17.
 */
import React from 'react'

import * as actions from './index'
import * as types from './index'
import * as filters from './index'

describe('action', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      id: 0,
      type:types.ADD_TODO,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})

describe('action', () => {
  it('should create an action to hidden all', () => {
    const expectedAction = {
      type:types.setVisibilityFilter().type,
      filter:types.setVisibilityFilter().filter,
    }
    expect(actions.setVisibilityFilter()).toEqual(expectedAction)
  })
})