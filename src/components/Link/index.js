/**
 * Created by ray.xie on 2017-07-17.
 */

import React from 'react'

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
}

export default class Link extends react.Component {
  constructor(props) {
    super(props)

    this._onMouseEnter = this._onMouseEnter.bind(this)
    this._onMouseLeave = this._onMouseLeave.bind(this)

    this.state = {
      class: STATUS.NORMAL,
    }
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED})
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL})
  }

  render() {
    return (
      <a
        className={this.stat.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter()}
        onMouseLeave={this._onMouseLeave()}>
        {this.props.childre}
      </a>
    )
  }

}