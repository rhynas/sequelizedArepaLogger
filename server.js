// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// ******************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var cookieParser = require('cookie-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory 
//in the application directory.
// =============================================================
app.use(express.static(path.join(__dirname, "/public")));

// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
app.use(cookieParser());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// =============================================================
var arepa_controller = require("./controllers/arepa_controller.js");


app.use('/', arepa_controller);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


// app.get("/", function(req, res) {
//   // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

//   Arepa.findAll({}).then(function(results) {
//     res.render("index", {
//      arepas: results,
//     });
//   }).catch(function(err){
//     console.log(err);
//   });  
// });

// app.post("/newArepa", function(req, res) {
//   // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
//   Arepa.create({
//     arepa_name: req.body.arepa_name
//   }).then(function(results) {
//     // `results` here would be the newly created chirp
//     res.redirect('/');
//   });
// });

// PUT route for updating todos. We can get the updated todo data from req.body
// app.put("/:id", function(req, res) {
//   console.log("ID:" + res);
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  // Arepa.update({
  //   devoured: true,
  //   // complete: req.body.complete
  // }, {
  //   where: {
  //     id: req.body.id
  //   }
  // }).then(function(results) {
  //   res.redirect('/');
  // });
// });





















