var myNameSpace = angular.module("myApp", []);

myNameSpace.controller('MyController', function MyController($scope) {
    $scope.author = {
        'name': 'Nir Moav',
        'title': 'Wixifier Specialist',
        'company': "Wix"
    }
});