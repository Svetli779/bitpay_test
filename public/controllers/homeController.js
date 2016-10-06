angular.module('myApp').controller('homeController', 
	function($scope,productService,$location,multypartService,$window,productService) {

		$scope.openBitcoin = function() {
			
			productService.getBit().then(function(data) {
				//$window.open(data,'_blank');
				console.log(data)
				$scope.data = data;
			});
		}

		$scope.file = [];

		$scope.filesChange = function(element) {
			$scope.files = element.files;
			$scope.$apply();
		}

		$scope.Submit = function() {

			//var file = $scope.file;
			var fd = new FormData();

			angular.forEach($scope.files,function(file) {
				fd.append('file',file);
			});
/////////////////////////////////////////////////////////
            multypartService.sendFile(fd).then(function(data) {
            	console.log(data);
            },function(err) {
            	console.log(err)
            });

		}

		productService.getAllProduct().then(function(data){
			$scope.products = data;
		},function(err) {
			
		});	

		$scope.buy = function(id,qty) {

		productService.buy({product_id:id,qty:qty}).then(function successCallback(data){

			$location.path('/cart');
				
			},function errorCallback(data) {
				if(data.status==404){
					$scope.response = 'Please fill all fields !';
					$scope.error = true;
					$scope.success = false;
				}
		});
	}	
});