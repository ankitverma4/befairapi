import mongoose from "mongoose";

let transactionsSchema = new mongoose.Schema({
    userId: String,
    amount: Number,
    participants:[
        { userId: String},
        { amount: Number}
    ],
    split: String
})

let transaction = mongoose.model('transactions', transactionsSchema);
module.exports = transaction;