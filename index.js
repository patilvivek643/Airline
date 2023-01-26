const express = require('express');//this package returns a fuction using which we can initiate a new express application object
//const { connect } = require('mongoose');
const { connect } = require('./src/config/db');
const User = require('./src/models/user')
const app = express();// executing the function returned a new express application
const apirouter = require("./src/routes/index");
app.use("/api",apirouter);
app.get('/',(req,res)=>{
    res.status(200);
    res.send({
        success : true,
        message : "Succesfully Hittng the api",
        data: {}
    });
});
app.listen(3000,async()=>{
    //this callback will be executed everytime this server starts
    console.log("Server Started Successfully");
    await connect();
    console.log("Mongo db connected successfully");
    console.log("Server Started Successfully");
  
});