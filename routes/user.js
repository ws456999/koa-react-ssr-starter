import User from '../models/user'
import jsonwebtoken from 'jsonwebtoken'
const router = require('koa-router')()

router.prefix('/user')

router.get('/:id', async function (ctx, next) {
  try {
    let data = await User.getUserByName(ctx.params.id + '')
    ctx.body = {
      data,
      token: jsonwebtoken.sign({
        data: data,
        // 设置 token 过期时间
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // 60 seconds * 60 minutes = 1 hour
      }, 'what')
    }
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async function (ctx, next) {
  const createRule = {
    name: { type: 'string' },
    password: { type: 'string' }
  }
  try {
    // ctx.validate(createRule)
    let user = await User.getUserByName(ctx.request.body.name)
    if (user) {
      ctx.status = 406
      ctx.body = {
        message: '用户名已经存在'
      }
      return
    }
    await User.create(ctx.request.body)

    ctx.status = 200
    ctx.body = {
      message: '创建成功'
    }
  } catch (error) {
    ctx.status = 400
    ctx.body = {
      message: 'error'
    }
  }
})

module.exports = router
