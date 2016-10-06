var express = require("express");
var router = express.Router();
//var Product = require('../models/product');
var Bitpay = require("bitpay-node");


router.get('/',function(req,res) {
	/*Product.find({}).exec(function(err,data) {
		if(err){
			return res.status(401).send("No products !");
		}
		return res.status(200).send(data);
	});*/
});

router.get('/cart',function(req,res) {
	res.send(req.session.cart);
});


router.delete('/cart/item/:id',function(req,res) {

	/*var id = req.params.id;
	var index = -1;
	for(var i=0;i<req.session.cart.length;i++){
		if(req.session.cart[i].product._id == id){
			index = i;
			break;
		}
	}

	req.session.cart.splice(index,1);//remove items from the cart
	//and save in coockies
	req.session.save(function() {
		res.send(req.session.cart);
	});*/

});

router.put('/cart/item',function(req,res) {
	/*var product_id = req.body.id;
	var qty = req.body.qty;
	var cart = req.session.cart;

	for(var i=0;i<cart.length;i++){
		if(product_id==cart[i].product._id){
			cart[i].qty = qty;
			break;
		}
	}

	req.session.save(function() {
		res.send(cart);
	});*/

});

router.post('/buy',function(req,res){
	/*var product_id = req.body.product_id;
	var qty = req.body.qty;
	Product.findById(product_id).exec(function(err,data) {
		if(!data){
			return res.status(404).send();
		}

		var cart = req.session.cart || [];
		cart.push({
			product : data,
			qty : qty
		});

		req.session.cart = cart;
		req.session.save(function(){
			res.send()
		})
	});*/
});

router.get('/bit',function(req,res) {
	console.log('bitcontroller')
	var id,
		url;

	var client = new Bitpay.Client({apiKey : 'LLD0ugiHcgbuSRgrzxC87wo2eI2n0gLwVnpKbx6Juk'});
	var options = {
		price : '0.0001',
		currency : 'BTC'
	}
	client.createInvoice(options, function(err, invoice) { 
		if(err){
			console.log(err);
			return res.status(400).send(err);
		}
		console.log(invoice);
		url = invoice.url;
		id  = invoice.id;

		client.getInvoice(id, function(err, result) {
		  	console.log(result);
		});

	  	res.json(invoice.url);
	});
});

module.exports = router;