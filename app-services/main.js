(function (angular) {
    'use strict';
    var App = angular.module('main',['ngSanitize','ngRoute']);
    App.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/',{
                    templateUrl: 'login/login.html',
                    controller: 'loginCtrl'
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
            $scope.mensaje= '<h1>esto es una prueba asdasd </h1>';
    });

}(angular));