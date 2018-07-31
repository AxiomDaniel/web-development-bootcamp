// Straight away initialize it to be an object of the epxress function
var app = require("express")();

app.get("/", function(req, res) {
  res.render("home.ejs");
});

app.get('/fallinlovewith/:animal', function(req, res) {
  var animalVar = req.params.animal;
  res.render("love.ejs", {
    animal: animalVar
  });
});


app.listen(3000, function() {
  console.log("Listening on port 3000");
})