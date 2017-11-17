var express = require("express");
var app = express();

var animalData = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!",
    cat: "Meow",
    turkey: "Gobble, Gobble!"
}

// ==================== ROUTES ====================
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req,res) {
    var message = "The " + req.params.animal + " says '" + animalData[req.params.animal] +"'";
    res.send(message);
});

app.get("/repeat/:message/:count", function(req, res) {
   var count = parseInt(req.params.count);
   var msg = req.params.message;
   var arr = [];
   for (var i = 0; i < count; i ++) {
       arr.push(msg);
   }
   res.send(arr.join(" "));
});

// ==================== 404 ====================
app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?"); 
});



// ==================== LISTEN ON A PORT ====================
// Required for Cloud9 development
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!!");
});