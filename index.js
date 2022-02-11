// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// port
const port = 3000;

// app
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

// use middlewares
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// use static files
app.use(express.static('public'));

// Routes, request data from resource, localhost:3000/
app.get('/', (req, res) => {
    res.render('index');
});

// start server at port
app.listen(port, () => {
  console.log('Server listening port ' + port);
});