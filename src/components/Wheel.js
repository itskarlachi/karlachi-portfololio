import React, { Component } from 'react'

class Wheel extends Component {
  render () {
    return (
      <div className={this.props.className}>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    )
  }
}

export default Wheel
