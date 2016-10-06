angular.module('myApp').controller('loginController', function($scope,userService,$timeout, $rootScope){
	
	$scope.userLogin = function() {
		var username = $scope.loginUsername;
		var password = $scope.loginPassword;
		var data = JSON.stringify({username:username,password:password});

		userService.loginUser(data).then(function successCallback(data){
			$timeout(function(){
				$scope.response = 'Successfuly Login !';
				$scope.error = false;
				$scope.success = true;
			}, 1000);

			setTimeout(function(){
				$rootScope.$broadcast("user-loggedIn");
				window.location = '#/';

			}, 2000);
		},function errorCallback(data) {
			
			if(data.status==401){
				$scope.response = 'This user does not exist !';
				$scope.error = true;
				$scope.success = false;
			}
			
		});
	}	
});