(function (angular) {
    'use strict';
    angular.module('main')
        .controller('homeCtrl',['$scope',function (s) {
            s.mensaje= '<h1>esto es una prueba</h1>';
        }]);
})(angular);