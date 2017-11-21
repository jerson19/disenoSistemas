(function (angular) {
    'use strict';
    angular.module('main')
        .controller('loginCtrl',
            function ($scope,$location) {
                $scope.mensaje= '<h1> Anthony se la come doblada </h1>';
                $scope.submit = function () {
                    var uname = $scope.username;
                    var pasword = $scope.password;
                    if(pasword==='admin' && uname ==='admin'){
                        $location.path('/home');
                    };
                }
            });
})(angular);