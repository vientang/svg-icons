import React, { Component } from 'react'
import Hamburger from './Hamburger'
import RightCarat from './RightCarat'
import Browser from './Browser'
import Alert from './Alert'
import Play from './Play'
import Download from './Download'

class App extends Component {
  render() {
    return (
      <div className="grid">
        <svg width={750} height={500}>
          <defs>
            <Download />
            <Hamburger />
            <RightCarat />
            <Browser />
            <Alert />
            <Play />
            <Download />
          </defs>

          <use href="#hamburger" x={100} y={100} />
          <use href="#rightcarat" x={300} y={100} />
          <use href="#browser" x={500} y={100} />

          <use href="#play" x={100} y={200} width={100} height={100} />
          <use href="#alert" x={300} y={200} width={100} height={100} />
          <use href="#download" x={500} y={200} width={100} height={100} />

        </svg>
      </div>
    )
  }
}

export default App
