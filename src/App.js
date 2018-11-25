import React, { Component } from 'react'
import wheel from './wheel.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='border'>
        <div className='main'>
          <nav className='nav'>
            <ul>
              <li>Projects</li>
              <li>About me</li>
            </ul>
          </nav>
          <div className='content'>
            <div className='text'>
              <h1 className='blog-name'>Kortraits</h1>
              <hr className='hr' />
              <p className='author-name'>Karla Vidal Chi</p>
            </div>
            <div className='wheel'>
              <img src={wheel} className='App-logo' alt='logo' />
            </div>
          </div>
          <div className='media' />
        </div>
      </div>
    )
  }
}

export default App
