angular.module('myApp').factory('userService',function(Restangular) {
	
	return {
		registerUser: function(userData){
			return Restangular.all("registration").customPOST(
				userData
			);
		},
		loginUser: function(userData){
			return Restangular.all("login").customPOST(
				userData
			)
		},
		updateAccount: function(userData) {
			return Restangular.all("account").customPOST(
				userData
			)
		}
	}
});
