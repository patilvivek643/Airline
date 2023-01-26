const mongoose = require('mongoose');
const connect = () =>{
    console.log("Mongodb connerction requested");
    return mongoose.connect('mongodb://127.0.0.1:27017/project');
}
module.exports={
    connect
}