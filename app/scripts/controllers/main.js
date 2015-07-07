'use strict';

/**
 * @ngdoc function
 * @name technicalFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the technicalFrontApp
 */
angular.module('technicalFrontApp')
  .controller('MainCtrl', ['$scope', '$http', '$location',
    function ($scope,$http,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log($scope.awesomeThings);
  }]);

//}]);
