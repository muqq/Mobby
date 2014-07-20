'use strict';

var opApp = angular.module('opApp', [
    'angularFileUpload',
    '$strap.directives',
    'opControllers'
], function($locationProvider) {
    $locationProvider.html5Mode(true);
});

var opControllers = angular.module('opControllers', []);


// Nav controller
opControllers.controller('op-nav-control', ['$scope', 
    function($scope) {
        $scope.onNav = function(path) {
            window.location.href = path;
        }
    }
]);


opControllers.controller('op-home-control', ['$scope', '$http',
    function($scope, $http) {

    }
]);

