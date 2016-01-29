var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
  return {
    show: function(req, res){
      Customer.find({}, function(err, results){
        if (err) {
          console.log('Cannot show customer:', err);
        } else {
          res.json(results);
        }
      });
    },

    add: function(req, res){
      console.log('adding', req.body);
      var customer = new Customer({name: req.body.name, created: Date.now()});
      customer.save(function(err){
        if (err) {
          console.log(err);
        } else {
          res.json(true);
        }
      });
    },

    destroy: function(req, res){
      console.log(req.params.id);
      Customer.remove({_id: req.params.id}, function(err){
        if(err){
          console.log(err);
        } else {
          res.json(true);
        }
      });
    }
  };
})();
