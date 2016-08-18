'use strict';

angular.module('cars')

	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

		$stateProvider

		.state('cars', {
        		url: '/cars',
				templateUrl: 'app/cars/views/cars.html',
				controller: 'carCtrl'
       	});

	}]);
