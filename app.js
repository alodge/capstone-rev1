var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");
var path = require("path");
var https = require("https");
var randomstring = require("randomstring");
var querystring = require("querystring");

var nodemailer = require("nodemailer");

var freeTokensPage = "https://burgercoin-project-2018.herokuapp.com/";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "burgercoinosu@gmail.com",
    clientId:
      "1036091924534-1esr8b65m2tjv4k05fbdfbuo5s52d5s2.apps.googleusercontent.com",
    clientSecret: "9DFDTg_Nb_iCu9dAZqeAV6hH",
    refreshToken: "1/wF5AVG9MAO6mw5CAxUOo3I676vx2Xsg6UMqWaBszVRo"
  }
});

var app = express();
var port = process.env.PORT || 3000;
//var req_1 = new XMLHttpRequest();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.post("/", function(req, res) {
  var userEmail = req.body.email_input;
  var mailOptions = {
    from: "BurgerCoinOSU <BurgerCoinOsu@gmail.com>",
    to: userEmail,
    subject: "BurgerCoinOSU Free Tokens!!!",
    text:
      "Follow the link to claim your tokens! https://burgercoin-project-2018.herokuapp.com/"
  };
  
  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.log("Error");
    } else {
      console.log("Email Sent");
    }
  });

  res.render("start", {});
});


app.post("/u_signup", function(req, res) {
  
    console.log("0");
  
  var userEmail = req.body.email_input;
  var mailOptions = {
    from: "BurgerCoinOSU <BurgerCoinOsu@gmail.com>",
    to: userEmail,
    subject: "BurgerCoinOSU Free Tokens!!!",
    text:
      "Follow the link to claim your tokens! https://burgercoin-project-2018.herokuapp.com/"
  };
  
  console.log("a");
  
  
  // var req_1 = new XMLHttpRequest();
  // var payload = {sampleDate:null};
  // payload.sampleDate = document.getElementById("sampleDate").value;
  /*
  req.open("GET", "https://my-project-1514223225812.appspot.com/account", true);
  
  req.addEventListener('load',function(){
    if(req.status >= 200 && req.status < 400)
    {
      var response = JSON.parse(req.responseText);
      console.log(response);
    } 
    else 
    {
      console.log("Error in network request: " + req.statusText);
    }});		
  req.send(JSON.stringify(payload));
  // event.preventDefault();
  */
  
  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.log("Error");
    } else {
      console.log("Email Sent");
    }
  });
    
    console.log("e");
  
  res.render("u_signup", {});
    
});

app.get("/", function(req, res) {
  res.render("start", {});
});

app.get("/about", function(req, res) {
  res.render("about", {});
});

app.get("/transfer", function(req, res) {
  res.render("transfer", {});
});

app.get("/user", function(req, res) {
  res.render("user", {});
});

app.get("/restaurant", function(req, res) {
  res.render("restaurant", {});
});

app.get("/u_signup", function(req, res) {
  res.render("u_signup", {});
});

app.get("/r_signup", function(req, res) {
  res.render("r_signup", {});
});


app.listen(port, function() {
  console.log("BurgerCoin app listening on port " + port + "!");
});
