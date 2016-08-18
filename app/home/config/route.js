'use strict';

angular.module('home')

	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/home');

		$stateProvider

		.state('home', {
        		url: '/home',
				templateUrl: 'app/home/views/home.html',
				controller: 'homeCtrl'
       	});

	}]); 
