'use strict';

/**
 * @ngdoc overview
 * @name technicalFrontApp
 * @description
 * # technicalFrontApp
 *
 * Main module of the application.
 */
var app = angular.module('technicalFrontApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router'
  ]);

 app.config(['$stateProvider','$urlRouterProvider','$locationProvider','$httpProvider',
            function($stateProvider,$urlRouterProvider,$locationProvider,$httpProvider){

 $stateProvider
  .state('app', {
    url : '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })

  .state('app.home', {
    url:'home',
    views: {
      'homeView' : {
        templateUrl: 'views/home.html',
        controller: ''
      }
    }
  })

  .state('app.about', {
    url:'about',
    views: {
      'aboutView' : {
        templateUrl: 'views/about.html',
        controller: ''
      }
    }
  });

  $urlRouterProvider.otherwise("home");

}]);
