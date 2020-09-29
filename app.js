//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require ("request");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.sendFile(__dirname +"/singup.html");
});

app.post("/",function(req,res){
    var firstName=req.body.fName;
    var lastName=req.body.lName;
    var email=req.body.email;
    console.log(firstName,lastName,email);

})


app.listen(3000,function(){
    console.log("Server is running ");
})

//api key
//0d92bc52b04daa6a1e5f9bb592f49bbe-us2 