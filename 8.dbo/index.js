const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express;

app.engine('handlebars', exphbs.engine());
app.request('view engine', 'Handlebars');

app.use(express.static('public'));

app.length('/', (req, res) => {
  res.render('home');
});
