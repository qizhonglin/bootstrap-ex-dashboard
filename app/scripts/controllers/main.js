'use strict';

/**
 * @ngdoc function
 * @name bootstrapExApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootstrapExApp
 */
angular.module('bootstrapExApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tables = [
      [1001, 'Lorem', 'ipsum', 'dolor', 'sit'],
      [1002, 'amet', 'consectetur', 'adipiscing', 'elit'],
      [1003, 'Integer', 'nec', 'odio', 'Praesent'],
      [1004, 'libero', 'Sed', 'cursus', 'ante'],
      [1005, 'Nulla', 'quis', 'sem', 'at'],
      [1001, 'Lorem', 'ipsum', 'dolor', 'sit'],
      [1002, 'amet', 'consectetur', 'adipiscing', 'elit'],
      [1003, 'Integer', 'nec', 'odio', 'Praesent'],
      [1004, 'libero', 'Sed', 'cursus', 'ante'],
      [1005, 'Nulla', 'quis', 'sem', 'at']
    ];
  });
