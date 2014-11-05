var app = angular.module('tallerAngular', ['ngRoute', 'MainCtrl']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider.otherwise('/');

	$routeProvider.when('/new', {
		templateUrl: '../views/_new.html'
	});
});