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
  var mailOptions = {
    from: "BurgerCoinOSU <BurgerCoinOsu@gmail.com>",
    to: userEmail,
    subject: "BurgerCoinOSU Free Tokens!!!",
    text:
      "Follow the link to claim your tokens! https://burgercoin-project-2018.herokuapp.com/"
  };
  /*
  var emailDomain = userEmail.replace(/.*@/, "");
  //  CHECK1 - Email address has an oregonstate.edu domain
  if (emailDomain == "oregonstate.edu") {
    // check the current list of email addresses
    // START HTTP
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var current_list = JSON.parse(xhttp.responseText);
       console.log(current_list);
        var already_exists = 0;
          for (var address_x in current_list)
          {
            var current_object = current_list[address_x];
            if (current_object['address'] == emailAddress)
            {
              already_exists = 1;
            }
          }
          if (already_exists == 0)
          {
            // new account
            // const myAddress = await web3.eth.getAccounts();
            // await bctest.methods.getCoins().send({ gas: "700000", from: myAddress[0] });
            // add to database
            fetch('https://my-project-1514223225812.appspot.com/account', {
              method: 'post',
              body: JSON.stringify({address: userEmail})
            }).then(res => console.log(res));
          }
          if (already_exists == 1)
          {
            console.log("I'm sorry, that address has already received BurgerCoin");
          }
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();
    
    // END HTTP
  else if (emailDomain != 'oregonstate.edu')
  {
      console.log("I'm sorry, we are only giving coins to oregonstate.edu addresses right now
  }
  */
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
  var mailOptions = {
    from: "BurgerCoinOSU <BurgerCoinOsu@gmail.com>",
    to: userEmail,
    subject: "BurgerCoinOSU Free Tokens!!!",
    text:
      "Follow the link to claim your tokens! https://burgercoin-project-2018.herokuapp.com/"
  };
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    var current_list = JSON.parse(xhttp.responseText);
    console.log(current_list);
    var already_exists = 0;
          for (var address_x in current_list)
          {
            var current_object = current_list[address_x];
            if (current_object['address'] == emailAddress)
            {
              already_exists = 1;
            }
          }
          if (already_exists == 0)
          {
            // new account
            // const myAddress = await web3.eth.getAccounts();
            // await bctest.methods.getCoins().send({ gas: "700000", from: myAddress[0] });
            // add to database
            fetch('https://my-project-1514223225812.appspot.com/account', {
              method: 'post',
              body: JSON.stringify({address: userEmail})
            }).then(res => console.log(res));
          }
          if (already_exists == 1)
          {
            console.log("I'm sorry, that address has already received BurgerCoin");
          }
    
    };
    xhttp.open("GET", "filename", true);
    xhttp.send();
                  
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
