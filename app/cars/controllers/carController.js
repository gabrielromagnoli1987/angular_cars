angular.module('cars')

	.controller('carCtrl', ['$scope', 'CarsResource', function($scope, CarsResource){

		$scope.cars = CarsResource.query();
		
	}]);
