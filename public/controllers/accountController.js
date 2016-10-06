angular.module('myApp').controller('accountController',
	function($scope,userService,$timeout){	

		$scope.changeAccount = function() {
			
			var username = $scope.changeUsername;
			var password = $scope.changePassword;
			var data = JSON.stringify({ username:username, password:password });
	
			userService.updateAccount(data).then(function successCallback(data) {
				
				$timeout(function() {
					$scope.response = 'Your Accaunt was changed !';
					$scope.success = true;
					$scope.error = false;
				}, 1000);

				setTimeout(function() {
					window.location = '#/';
				}, 2000);
			},function errorCallback(data){
				if(data.status==500){
					$scope.response = 'Please fill all fields !';
					$scope.error = true;
					$scope.success = false;
				}
			});

		}		
});