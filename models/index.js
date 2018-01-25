import mongoose from 'mongoose'
import devConfig from '../config/dev'

/**
 * @param config - mongodb 配置
 */
export default  config => {
  return new Promise((resolve, reject) => {
    mongoose.connection
      .on('error', error => reject(error))
      .on('close', () => console.log('Database connection closed.'))
      .once('open', () => resolve(mongoose.connections[0]))

    mongoose.connect(devConfig.mongodb.uri, {
      useMongoClient: true,
    })
  })
}
