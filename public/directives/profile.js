angular.module('myApp').directive('profile',function($rootScope, $http){
	return {
		restrict: 'A',
		templateUrl: 'directives/profile.html',
		link : function(scope,element, attrs){
			function loadUser(){
				$http.get("/currentUser").success(function(data){
					scope.currentUser = data;
				});
			}

			loadUser();

			$rootScope.$on("user-loggedIn", function(){
				loadUser();
			});

			scope.logout = function(){
				$http.get("/logout").success(function(){
					loadUser();
				})
			}
		}
	};
});