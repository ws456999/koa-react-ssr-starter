import { hydrate } from 'react-dom'
import React from 'react'
import AppRouter from './router'
import { BrowserRouter } from 'react-router-dom'

hydrate(
  <BrowserRouter basename="/client">
    <AppRouter />
  </BrowserRouter>,
  document.getElementById('root')
)

if(module.hot) {
  module.hot.accept();
}