import React from 'react'
import { observer, inject } from "mobx-react"

const Home = () => {
  return (
    <div>
      <h1 onClick={() => window.alert('home')}>this is home page!</h1>
    </div>
  )
}

export default Home
