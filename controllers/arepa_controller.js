 var express = require("express");
var app = express.Router();

// Import the model (arepa.js) to use its database functions.
var Arepa = require("../models/arepa.js");

app.get("/", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

  Arepa.findAll({}).then(function(results) {
    res.render("index", {
     arepas: results,
    });
  }).catch(function(err){
    console.log(err);
  });  
});

app.post("/", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
  console.log(req.body)
  Arepa.create({
    arepa_name: req.body.arepa_name
  }).then(function(results) {
    // `results` here would be the newly created chirp
    res.redirect('/');
  });
});

app.put('/update', function(req, res){

	var condition = req.body.burger_id;

	console.log("ID:" + req.body.burger_id);

	// Arepa.update(
	// 	{ devoured: true}, 
 //    { where: { id: condition } }
 //    // { where: "id = 1" }
	// ).then(function(res){
 //      console.log('got to line 40')
	//   	res.redirect('/')
	//   })


    Arepa.update({
      devoured: true,
    },
    {
      where: { id : req.body.burger_id }
    }
  ).then(function() {
      res.redirect('/');
    });

})


// Export routes for server.js to use.
module.exports = app;