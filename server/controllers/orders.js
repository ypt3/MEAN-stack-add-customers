var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
  return {
    show: function(req, res){
      Order.find({}, function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    add: function(req, res){
      console.log('adding orders in order', req.body);
      var order = new Order({item: req.body.item, customer: req.body.customer, quantity: req.body.quantity, created: Date.now()});
      order.save(function(err){
        if(err) {
          console.log(err);
        } else {
          res.json(true);
        }
      });
    },

    destroy: function(req, res){
      console.log('deleteing', req.params.id);
      Order.remove({_id: req.params.id}, function(err){
        if (err) {
          console.log(err);
        } else {
          res.json(true);
        }
      });
    }
  };
})();
