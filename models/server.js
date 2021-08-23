const express = require('express')
const cors = require('cors')
const path = require('path')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.port
    this.paths = {
      auth: '/api/auth',
      homepage: '/api/homepage'
    }
    this.middlewares()
    this.routes
  }
  middlewares () {
    this.app.use(cors())
  }
  routes () {
    this.app.use(this.paths.auth, require('../routes/auth'))
    this.app.use(this.paths.homepage, require('../routes/homepage'))
  }
  listen () {
    this.app.listen(this.port, () => {
      console.log('server running on port: ', this.port)
    })
  }
}

module.exports = Server;