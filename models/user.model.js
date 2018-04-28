import mongoose, { mongo } from "mongoose";

let userSchema = new mongoose.Schema({
    name: string,
    email: string,
    mobileNumber: number,
    password: string,
    transactions: [{type: mongoose.Types.ObjectId}]
}, { timestamps: true });

let User = mongoose.model('users', userSchema);
module.exports = User;