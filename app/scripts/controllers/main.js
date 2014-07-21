'use strict';

/**
 * @ngdoc function
 * @name angularPaginatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPaginatorApp
 */
angular.module('angularPaginatorApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
