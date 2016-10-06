var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  kind: { 
    type: String,
    required: true
  },
  price: {
  	type: String,
  	required: true
  },
  picture: {
  	type: String,
  	required: true
  },
  name:{
    type: String,
    required: true
  }
});



var Products = mongoose.model('products',productSchema);

module.exports = Products;