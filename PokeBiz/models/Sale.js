//models/Sale.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String
});

var saleSchema = new Schema({
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    discount: Number,
    products: [productSchema]
});

module.exports = mongoose.model('Sale', saleSchema);