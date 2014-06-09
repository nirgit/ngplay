var appNameSpace = angular.module("myApp", []);

appNameSpace.controller('MyController', ['$scope', '$http',
    function MyController($scope, $http) {
        $http.get('js/data.json').success(function(data) {
            $scope.artists = data;
            $scope.artistOrder = 'name';
        });
    }
]);