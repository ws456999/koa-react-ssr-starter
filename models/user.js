import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', userSchema)

export default {
  // 注册一个用户
  create (user) {
    return User.create(user)
  },
  // 通过用户名获取用户信息
  getUserByName (name) {
    return User
      .findOne({name: name + ''})
      // .addCreatedAt()
      .exec()
  }
}
