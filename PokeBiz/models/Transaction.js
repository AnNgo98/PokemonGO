//models/Transaction.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
    username: String,
    amount: Number,
    sellDate: { type: Date, default: Date.now },
    discount: Number
});

module.exports = mongoose.model('Transaction', transactionSchema);