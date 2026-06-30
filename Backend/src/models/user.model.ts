import mongoose from 'mongoose';

export interface Iuser {
    username: string,
    email: string,
    password: string
}


const userSchema = new mongoose.Schema<Iuser>({
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

const userModel = mongoose.model<Iuser>('User', userSchema);

export default userModel;
