var socket = io.connect();
var app = angular.module('app', []);

app.controller('mainController', ['$scope', function ($scope) {

    $scope.postits = [];

    $scope.postits.push(new Postit(loadFromStorage('postits')));

    console.log($scope.postits);

}]);