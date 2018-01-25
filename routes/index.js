import App from '../client/components/root.js'
import ServerRoot from '../client/server.js'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
const router = require('koa-router')()

let { renderToString } = ReactDOMServer

router.get(/\/client.*/, async (ctx, next) => {
  let url = ctx.request.url.replace('/client', '')
  const context = {}
  let str = renderToString(<ServerRoot url={url} context={context} />)
  await ctx.render('index', {
    root: str,
  })
})

module.exports = router
