/**
 * Created by ray.xie on 2017-07-17.
 */


import React from 'react'
import Link from './index'
import renderer from 'react-test-renderer'

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  )

  let tree = component.toJSON()
  expect(tree).toMacthSnapshot()

  // manually trigger the callback
  tree.props._onMouseEnter()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  tree.props._onMouseLeave()
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatcSnapshot()
})
