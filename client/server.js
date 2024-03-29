const express = require('express')
const path = require('path')

require('dotenv').config()

const app = express()

const port = 8080

app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`))
})
app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
