import React, { Component } from 'react'
class NavBar extends Component {
  render () {

    return (
          <nav className={this.props.className}>
            <ul>
              {
                this.props.links.map(link => (
                  <li className="link" onClick={link.anchor} key={link.text}>
                    {link.text}
                  </li>
                ))
              }
            </ul>
          </nav>
          
    )
  }
}

export default NavBar
