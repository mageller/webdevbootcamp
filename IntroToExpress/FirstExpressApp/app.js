var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!"); 
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!"); 
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    res.send("MEOW!"); 
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() +  " SUBREDDIT!"); 
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
   res.send("WELCOME TO SUBREDDIT COMMENTS"); 
});

app.get("*", function(req, res) {
    res.send("YOU ARE A STAR!!!"); 
});

// Required for Cloud9 development
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!!");
});