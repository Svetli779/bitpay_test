angular.module('myApp').factory('productService',function(Restangular) {
	//get all products
	return {
		getAllProduct: function(){
			return Restangular.all("product").customGET();
		},
		getCart: function(){
			return Restangular.all("product").one("cart").customGET();
		},
		buy: function(productData){
			return Restangular.all("product").one("buy").customPOST(productData);
		},
		deleteProduct: function(id) {
			return Restangular.all("product").one("cart").one("item")
			.one(id).customDELETE();
		},
		updateProduct: function(qty,id) {
			return Restangular.all("product").one("cart").one("item")
			.customPUT(
				{ qty : qty , id : id }
			);
		},
		getBit : function() {
			return Restangular.all("product").one("bit").customGET();
		}
	}
});