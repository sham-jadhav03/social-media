import userModel from "../models/user.model.js"

const findByEmail = (email: string) => {
    userModel.findOne({email}).select("+password");
}

const createUser = (data: any) =>{
  userModel.create(data);
}

const findById = (id: string) => {
    userModel.findById(id);
}

export default {
    findByEmail, createUser, findById
}