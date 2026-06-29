import mongoose, { model } from 'mongoose';
import { lowercase, maxLength, minLength } from 'zod';

const userSchema = new mongoose.Schema({
   username: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 30
   },
   email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
   },
   password: {
    type: String,
    required: true,
    minLength: 6
   }
}, {
    timestamps:true
})

const userModel = mongoose.model('User', userSchema);

export default userModel;
