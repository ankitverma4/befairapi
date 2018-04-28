import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobileNumber: Number,
    password: String,
    transactions: [{type: mongoose.Schema.Types.ObjectId}]
}, { timestamps: true });

let User = mongoose.model('users', userSchema);
module.exports = User;