var appNameSpace = angular.module("myApp", []);

appNameSpace.controller('MyController', function MyController($scope) {
    $scope.author = {
        'name': 'Nir Moav',
        'title': 'Wixifier Specialist',
        'company': "Wix"
    }
});