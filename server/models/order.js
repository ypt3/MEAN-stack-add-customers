var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  customer: String,
  created: Date,
  quantity: Number,
  item: String
});

mongoose.model('Order', orderSchema);
