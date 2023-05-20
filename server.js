const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

require('dotenv').config()
require('./config/database')

const app = express()

app.use(logger('dev'))
app.use(express.json())

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use(require('./config/checkToken'))

app.use('/api/users', require('./routes/api/users'))

/* API routes go here */
app.use('/api/excursions', require('./routes/api/excursions'));
app.use('/api/restaurants', require('./routes/api/restaurants'));
app.use('/api/goldenspoons', require('./routes/api/goldenspoons'));
app.use('/api/tables', require('./routes/api/tables'));


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001

app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
})
