import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    login:{
        type:String,
        required:true,
        unique:true
    },
    passwordHash: {
        type:String,
        required:true
    },
},
{
    timestamps:true
}) 

export default mongoose.model('User', userSchema)