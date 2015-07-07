'use strict';

/**
 * @ngdoc function
 * @name technicalFrontApp.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the technicalFrontApp
 */
angular.module('technicalFrontApp')
  .controller('MycontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
