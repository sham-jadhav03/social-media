const mongoose = require('mongoose');


const followSchema = new mongoose.Schema({
    follower:{
        type: String
    },
    followee: {
        type:String
    },
})