/**
 * Created by ray.xie on 2017-07-17.
 */

import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from 'ChecboxWithLabel';

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(
    <CheckboxWithLabel labelOn="On" lableOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');

  checkbox.fin('input').simulate('change');

  expect(checkbox.text()).toEqual('On');

});