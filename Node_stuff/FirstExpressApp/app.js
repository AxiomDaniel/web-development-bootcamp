var express = require("express");
var app = express();

// app.get
//First param: The directory that will trigger this function
//Second param: A function that governs what the server will serve when getting or receiving a request(req) or response(res)
//    res.send : function that sends to the requestor some piece of information
app.get("/", function(req, res) {
  console.log("Received a request for home directory");
  res.send("Hi there!");
});

app.get("/bye", function(req, res) {
  res.send('Goodbye!');
});

app.get("/kek", function(req, res) {
  res.send("FOR THE HORDE!");
});

// Reddit did not create a manual route for all subreddits that exists. That would be really bad design: a web dev has to manually create a route everytime a subreddit needs to be created.
// In using the colon infront of a substring, it now becomes a parameter that can be manipulated.
// Note that this tentative string would match all potential subreddit names, but if you used "/r/askreddit/popular", it wouldn't work because there's an extra path behind. This specific express matches all paths at that level, if there is addition paths, it's not matched.
app.get("/r/:subredditName", function(req, res) {
  //res.send("Placeholder route for all subreddits")
  // I mentioned that the colon substring becomes a parameter that can be manipulated. We manipulate this by using req.params
  //req.params is a object that contains all parameters submitted. you can take a look at all parameters that is being submitted by:
  console.log(req.params);
  res.send("Welcome to r/" + req.params.subredditName + "/");
})


// This is deemed as another expression different from the one above.
// Note, as repeated again, if you ommit any other parameter, it won't route here
// e.g. "/r/soccer/comments/as2asdAS"  <- will route to 404
// The above example doesnt have title in it.
app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
  res.send("Placeholder route for comments of any subreddit, threadID, title");
})


// This is the regex *, if a route is not found, express will serve this page.
// Note that since it is the regex *, it will match to anything, including homepage. So always ALWAYS put this route on the last.
app.get("*", function(req, res) {
  res.send("Error 404: Page not found")
})


// This function makes the server to start listening for requests.
// First param :: int : Which port should the server be listening on
// Second param :: fn : A function to run when this code runs
app.listen(3000, function() {
  console.log("Listening on port 3000");
})