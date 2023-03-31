const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.render("index");
})

app.post("/", function(req,res){
    const email = req.body.email;
    const password = req.body.pass;
    console.log("\nLogins Details: -")
    console.log("Username: "+ email);
    console.log("Password: "+ password);
    console.log("\n");
})


app.listen(3000, function(req,res){
    console.log("Server is Started");
})