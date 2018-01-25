import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AppRoot extends Component {
  render () {
    return (
      <div>
        <Link className="link" to="/home">
          <span>Home</span>
        </Link>
        <Link className="link" to="/list">
          <span>List</span>
        </Link>
        <Link className="link" to="/about">
          <span>About</span>
        </Link>

        <style jsx>{`
          span {
            display: inline-block;
            margin: 0 10px;
            padding: 5px 15px;
            background: #eee;
            color: fff;
          }
        `}</style>
      </div>
    )
  }
}

export default AppRoot
