// 
// Main app
//

var express   = require("express");
var app       = express();
var fs        = require("fs");

app.use("/", express.static("../front"));

app.use(function(req, res) {
		res.redirect("/index.html");
});


var server = app.listen(7001);
console.log("Server started");
