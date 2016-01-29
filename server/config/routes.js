var orders = require('./../controllers/orders.js');
var customers = require('./../controllers/customers.js');

module.exports = function(app) {
  app.get('/customers', function(req, res){
    customers.show(req, res);
  });
  app.post('/customers', function(req, res){
    console.log('adding customers');
    customers.add(req, res);
  });

  app.delete('/customers/:id', function(req, res){
    console.log("delete in routes.js");
    customers.destroy(req, res);
  });

//------------------------------------------------

  app.get('/orders', function(req, res){
    console.log('getting orders in routes');
    orders.show(req, res);
  });

  app.post('/orders', function(req, res){
    console.log('adding order in routes.js');
    orders.add(req, res);
  });

  app.delete('/orders/:id', function(req, res){
    console.log('delete orders');
    orders.destroy(req, res);
  });
};
