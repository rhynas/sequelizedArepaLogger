var express = require("express");
var app = express.Router();

// Import the model (arepa.js) to use its database functions.
var arepa = require("../models/arepa.js");


app.get('/', function(req, res){

	arepa.all(function(data){
		// console.log(data );
		var arepaObject = {
			arepas: data
		};
		res.render("index", arepaObject);
	});
})

app.post('/', function(req, res){

	arepa.create([
		"arepa_name"
	],[
		req.body.arepa_name
	], function(){
			res.redirect('/');
	});

})

app.put('/:id', function(req, res){
	var condition = "id = " + req.params.id;

	// console.log(condition);
	arepa.update({
		devoured: 1,
	}, condition, function(){
		res.redirect('/')
	})
})



// Export routes for server.js to use.
module.exports = app;