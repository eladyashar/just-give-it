const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const routes = require('./server/routes/index')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .use('/', routes)
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/pages/index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
