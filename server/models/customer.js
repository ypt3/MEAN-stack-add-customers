var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
  name: String,
  created: Date
});

mongoose.model('Customer', customerSchema);
