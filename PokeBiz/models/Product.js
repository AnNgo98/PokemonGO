//models/Product.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: String,
  money: Number,
  coins: Number,
  imageURL:String
});

module.exports = mongoose.model('Product', productSchema);