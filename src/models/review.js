const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    comment: {
        type:String,
        required: true,
        minlength: 5
    },
    flight: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
    }
},{timeStamp:true});

const reviewModel = new mongoose.Model('Review',reviewSchema);

module.exports = reviewModel;