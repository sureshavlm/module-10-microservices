/* https://products-services.herokuapp.com/query */

//var request = require('request');
var request = require('sync-request');

module.exports.getProducts = function(){
	var response = request('GET','https://products-services.herokuapp.com/query');
	return JSON.parse(response.body.toString());
};