'use strict';

/**
 * @ngdoc service
 * @name technicalFrontApp.technicalService
 * @description
 * # technicalService
 * Factory in the technicalFrontApp.
 */
angular.module('technicalFrontApp').factory('technicalService',['$http', '$rootScope', '$window', function ($http, $rootScope, $window) {
                                    //.factory('technicalService', function () {
    // Service logic
    var meaningOfLife = 42;

    return {
      config: function(){
       //rootScope.restAPIBaseUrl= 'http://localhost:8080/';
      }
    };
  }]);
