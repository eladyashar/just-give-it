const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const routes = require('./server/routes/index.js')
//const adminRoutes = require('./server/routes/adminRoutes.js');
const bodyParser = require('body-parser')
const session = require('express-session')

var app = express();
app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 60000 }}));
app.use(bodyParser.json());
app.use(routes);

 app.use('/', express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/views/logIn.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
