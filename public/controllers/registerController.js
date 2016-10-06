angular.module('myApp').controller('registerController', 
	function($scope,userService,$timeout) {
	
		$scope.userRegister = function() {
			var username = $scope.username;
			var password = $scope.password;
			var data = JSON.stringify({username:username,password:password});

			userService.registerUser(data).then(function successCallback(data){

				$timeout(function(){
					$scope.response = 'User was created !';
					$scope.error = false;
					$scope.success = true;
				}, 1000);

				setTimeout(function(){
					window.location = '#/';
				}, 2000);
			},function errorCallback(data) {
				if(data.status==500){
					$scope.response = 'Please fill all fields !';
					$scope.error = true;
					$scope.success = false;
				}
			});
		}
		
});