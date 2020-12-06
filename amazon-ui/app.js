const express = require('express');
var path = require('path');
var logger = require('morgan');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var products = require('./model/products');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 4200;

app.listen(port, () => {
	console.log('Server running on port %s', port);
});

app.get('/', (req, res) => {
	var _products = products.getProducts();
	res.render('index', { items: _products, title: 'Amazon App' });
});
