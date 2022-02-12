// dependencies
const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// routes
const myWorksRoute = require('./routes/myWorks.route');
const projectsRoute = require('./routes/projects.route');
const importantRoute = require('./routes/important.route');
const todayRoute = require('./routes/today.route');

// middlewares

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

// use routes
app.use('/myWorks', myWorksRoute);
app.use('/projects', projectsRoute);
app.use('/important', importantRoute);
app.use('/today', todayRoute);

// start server at port
app.listen(port, () => {
  console.log('Server listening port ' + port);
});