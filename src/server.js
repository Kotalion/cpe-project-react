const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(8000, () => {
  console.log('Start server at port 8000.')
})


app.get('/callback', (req, res) => {
    const userId = req.query.state
    const code = req.query.code
    console.log(userId)
    console.log(code)
})