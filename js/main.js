(function (angular) {
    'use strict';
    var App = angular.module('main',['ngSanitize']);
    App.controller('mainCtrl',
        function ($scope) {
            $scope.mensaje= '<h1>esto es una prueba</h1>';
    });
}(angular));