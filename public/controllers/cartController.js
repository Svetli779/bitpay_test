angular.module('myApp').controller('cartController', function($scope,productService) {
	
	productService.getCart().then(function(data) {
		$scope.cart = data;
	});

	$scope.deleteProduct = function(id) {
		
		productService.deleteProduct(id).then(function(data) {
			$scope.cart = data;
		},function errorCallback(err) {
			console.log(err);
		});

	}

	$scope.updateProduct = function(qty,id){
		productService.updateProduct(qty,id).then(function(data) {
			alert('product was updated');
			
		},function errorCallback(err) {
			console.log(err);
		});
	}

});