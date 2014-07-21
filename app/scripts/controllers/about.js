'use strict';

/**
 * @ngdoc function
 * @name angularPaginatorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPaginatorApp
 */
angular.module('angularPaginatorApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
