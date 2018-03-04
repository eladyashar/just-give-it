const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const routes = require('./server/routes/index')
const adminRoutes = require('./server/routes/adminRoutes.js');

var app = express();

app.set('admin_path',path.join(__dirname,'views','admin' + path.sep));


app.use('/admin',adminRoutes)

app.use(express.static(path.join(__dirname, 'public/admin')))
app.use('/bower_components', express.static(path.join(__dirname, '/public/bower_components')))
  .set('views', path.join(__dirname, 'views'))
  .use('/', routes)
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/pages/index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
