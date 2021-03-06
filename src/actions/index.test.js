/**
 * Created by ray.xie on 2017-07-17.
 */
import React from 'react'

import * as actions from './index'
import * as types from './index'

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