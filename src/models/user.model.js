const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: [true, " User name is already exist"],
        require:[true, 'username is require']
    },
    email:{
        type: String,
        unique:[true, "Email is already exist"],
        require:[true, "email is require"]
    },
    password:{
        type: String,
        unique:[true, "Password is already exist"],
        require: [true, "password is require"],
    },
    bio: String,
    profileImage:{
        type: String,
        default: "https://ik.imagekit.io/5hliqvpzd/default.jpg",
    }
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;