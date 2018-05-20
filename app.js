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
  var send_text = "456";
  var mailOptions = {
    from: "BurgerCoinOSU <BurgerCoinOsu@gmail.com>",
    to: userEmail,
    subject: "BurgerCoinOSU Free Tokens!!!",
    text: send_text
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
    
  var userEmail = req.body.email_input;
  var i;
  var send_int = 0;
  var send_char = '';
  var send_string = "";
  for (i = 0; i < 16; i++)
  {
    send_int = Math.floor(Math.random() * 26);
    send_char = String.fromCharCode(send_int + 97);
    send_string = send_string + send_char;
  }
  
  var mailOptions = {
    from: "BurgerCoinOSU <BurgerCoinOsu@gmail.com>",
    to: userEmail,
    subject: "BurgerCoinOSU Free Tokens!!!",
    text: send_string
  };
      
  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.log("Error");
    } else {
      console.log("Email Sent");
    }
  });
      
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
