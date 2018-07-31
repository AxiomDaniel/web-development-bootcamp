var express = require('express');
var app = express();


// Route for homepage
app.get("/", function(req, res) {
  console.log('Request made for home directory');
  res.send("Hi there, welcome to my assignment!");
})

//Route for /speak/:animal
app.get("/speak/:animal", function(req, res) {
  if (req.params.animal === 'pig') {
    replyString = "The pig says 'Oink'"
  } else if (req.params.animal === 'cow') {
    replyString = "The cow says 'Moo'"
  } else if (req.params.animal === 'dog') {
    replyString = "The dog says 'Woof Woof!'"
  } else {
    replyString = "Unknown animal"
  }
  res.send(replyString);
})

//Route for /repeat
app.get('/repeat/:aString/:iters', function(req, res) {
  let replyString = '';
  for (var i = 0; i < req.params.iters; i++) {
    replyString += req.params.aString + " "
  }
  res.send(replyString);
})

app.get("*", function(req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
})


app.listen(3000, function() {
  console.log("Started listen on port 3000");
})