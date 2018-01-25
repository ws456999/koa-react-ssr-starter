import React, { Component } from 'react'
import { observer, inject } from "mobx-react"

@inject('store')
@observer
export default class Abount extends Component {
  render () {
    const { add } = this.props.store
    return (
      <div className='what'>
        <button onClick={() => add(1)}>mobx + 1</button>
        <button onClick={() => add(-1)}>mobx - 1</button>

        <style jsx>{`
          .what {
            border: 1px solid black;
            padding: 1em 2em;
            margin: .5em 0;
          }
        `}</style>

      </div>
    )
  }
}
