import React, { Component } from 'react'
import { observer, inject } from "mobx-react"

@inject('store')
@observer
export default class List extends Component {
  render () {
    const { number } = this.props.store
    return (
      <div onClick={() => window.alert(4)} className='what'>
        <span>number from mobx</span>
        <p>{number}</p>
      </div>
    )
  }
}
