(function (angular) {
    'use strict';
    angular.module('main')
        .controller('homeCtrl',
        function ($scope) {
            $scope.mensaje= '<h1> Anthony se la come doblada </h1>';
        });
})(angular);