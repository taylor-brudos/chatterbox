var express = require('express')
var app = express()
var session = require('express-session');
var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(express.static(__dirname+'/public/dist/public'))

app.use(session({
	secret: 'supersecretsecret',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}))

require('./server/model')
require('./server/routes')(app)
app.listen(8000)