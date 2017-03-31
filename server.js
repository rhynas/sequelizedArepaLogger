// Dependencies
// =============================================================
var express = require("express");
var app = express();
var PORT = 3000;

// var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + "/public"));
// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

// Set Handlebars.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// =============================================================
var Arepa = require("./models/arepa.js");

console.log(Arepa);

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

app.post("/newArepa", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
  Arepa.create({
    arepa_name: req.body.arepa_name
  }).then(function(results) {
    // `results` here would be the newly created chirp
    res.redirect('/');
  });
});


// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT " + PORT);
});
























