(function (angular) {
    'use strict';
    var App = angular.module('main',['ngSanitize','ngRoute']);
    App.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/',{
                    templateUrl: 'login/login.html'
                })
                .when('/home',{
                    templateUrl: 'home/home.html',
                    controller: 'homeCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                })
        }
    ]);
    App.controller('mainCtrl',
        function ($scope) {
            $scope.mensaje= '<h1>esto es una prueba</h1>';
    });

}(angular));