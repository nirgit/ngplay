var artistControllers = angular.module("artistControllers", []);

artistControllers.controller('ListController', ['$scope', '$http',
    function MyController($scope, $http) {
        $http.get('js/data.json').success(function(data) {
            $scope.artists = data;
            $scope.artistOrder = 'name';
        });
    }
]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams',
    function DetailsController($scope, $http, $routeParams) {
        $http.get('js/data.json').success(function(data) {
            $scope.artists = data;
            $scope.whichItem = $routeParams.itemId;
            $scope.artist = $scope.artists[$scope.whichItem];
            $scope.prevItem = Math.max(0, $routeParams.itemId - 1);
            $scope.nextItem = Math.min($scope.artists.length - 1, $routeParams.itemId + 1);
        });
    }
]);