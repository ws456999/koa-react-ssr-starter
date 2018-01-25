export default {
  mongodb: {
    port: 4000,
    session: {
      secret: 'blog',
      key: 'blog',
      maxAge: 2592000000
    },
    uri: 'mongodb://localhost:27017/sample'
  }
}
