'use strict';

/**
 * @ngdoc function
 * @name technicalFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the technicalFrontApp
 */
angular.module('technicalFrontApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
