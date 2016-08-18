'use strict';

angular.module('cars')

	.factory('CarsResource', ['ENV', '$resource', function (ENV, $resource) {

		return $resource(ENV.endpoint.url + '/cars/:id', {});
		
	}]);