import Express from 'express'
import config from '../config.json'
import cors from 'cors'
import bodyParser from 'body-parser'
import MainRoute from './mainroute'
import path from 'path'

const app = Express()

// Using Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Frontend Routing
const wwwPath = path.join(__dirname, 'www')
console.log(wwwPath)
app.use('/', Express.static(wwwPath))
app.use('/api', MainRoute)

app.listen(config.port, () => {
  console.log('Backend App Running at Port', config.port)
})
