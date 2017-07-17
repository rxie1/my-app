/**
 * Created by ray.xie on 2017-07-17.
 */

import React from 'react'

export default class CheckboxWithLabel extends React.Component{

  constructor(props) {
    super(props);
    this.state = {iscHECKED: false};

    // bin manually because React class components don't auto-bin
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.setState({isChecked: !this.state.isChecked});
  }

  render() {
    return (
      <lable>
        <input
          type="checkbox"
          check={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn: this.props.labelOff}
      </lable>
    )
  }

}