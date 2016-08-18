'use strict';

angular.module('app', ['ui.router', 'ngResource', 'environment', 'home', 'cars'])

.run(['$rootScope', '$state', function($rootScope, $state){

	// Global access
	$rootScope.$state = $state;
	$state.go('home');

}]);
