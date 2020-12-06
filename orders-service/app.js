const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log('App running on port %s', port);
});

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });

 app.get('/', (req, res) => {
 	res.send('Welcome to Orders App');
 });

app.get('/order', (req, res) => {
	res.json([{message: "Order placed successfully", status:200}]);
});