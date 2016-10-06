var myApp = angular.module('myApp',
	['ngRoute','restangular','timer']);

myApp.config(function($routeProvider) {

	$routeProvider
		.when('/',{
			templateUrl: 'home.html',
			controller: 'homeController',
			title : "Welcome"
		})
		.when('/register',{
			templateUrl: 'register.html',
			controller: 'registerController',
			title : "Register"
		})
		.when('/login',{
			templateUrl: 'login.html',
			controller: 'loginController',
			title : "Login"
		})
		.when('/account',{
			templateUrl: 'account.html',
			controller: 'accountController',
			title: 'Account'
		})
		.when('/cart',{
			templateUrl: 'cart.html',
			controller: 'cartController',
			title: 'Cart'
		})
		.otherwise({
			redirectTo: '/'
		});
	}).run(function($rootScope){
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
	        document.title = current.$$route.title;
    });
});	