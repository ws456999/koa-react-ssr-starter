import React, { Component } from 'react'
import { StaticRouter, matchPath } from 'react-router'
import AppRouter from './router'

class What extends Component {
  render () {
    return (
      <StaticRouter basename="/client" context={this.props.context} location={this.props.url}>
        <AppRouter />
      </StaticRouter>
    )
  }
}

export default What
