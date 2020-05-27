const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')


const { PORT } = require('./src/consts.js')

const bootstrap = async (app) => {
  app.use(express.static(path.join(__dirname, 'client')))

  app.use(bodyParser.json({ limit: '50mb', extended: true }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  app.use(cookieParser())

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'))
  })


  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
  })
}

const app = express()

bootstrap(app)
