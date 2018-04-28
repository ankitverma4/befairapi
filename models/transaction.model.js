import mongoose from "mongoose";

let transactionsSchema = new mongoose.Schema({
    userId: String,
    amount: Number,
    participants:[
        { userId: String},
        { amount: Number}
    ],
    type: String
})

let transaction = mongoose.model('transactions', transactionsSchema);
module.exports = transaction;