const express = require('express');//this package returns a fuction using which we can initiate a new express application object
//const { connect } = require('mongoose'); 
const bodyParser = require('body-parser');
const passport = require('passport');
const authRouter = require('./src/routes/authRoutes')
const { connect } = require('./src/config/db');
require('./src/util/auth')
const User = require('./src/models/user')
const app = express();// executing the function returned a new express application
const apirouter = require("./src/routes/index");
app.use(bodyParser.urlencoded({extended:false}))
app.use("/",authRouter);
app.use("/api",passport.authenticate('jwt',{session:false}),apirouter);
// app.get('/',(req,res)=>{
//     res.status(200);
//     res.send({
//         success : true,
//         message : "Succesfully Hittng the api",
//         data: {}
//     });
// });
// app.use(function(err,req,res,next){
//     res.status(err.status || 500);
//     res.json({
//         success:false,
//         error:err
//     });
// });
app.listen(3000,async () => {
    //this callback will be executed everytime this server starts
    // console.log("Server Started Successfully");
    await connect();
    console.log("Mongo db connected successfully");
    console.log("Server Started Successfully");
    // let user = await User.create({
    //     email:"abc@xyz.com",
    //     password:12345,
    //     username:"ABC"
    // });
    // console.log(user);
});