angular.module('myApp', []).controller('FormController', function ($scope) {
    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;
    $scope.options = [{ name: "A+", id: 1 }, { name: "A-", id: 2 }
                      , { name: "B+", id: 1 }, { name: "B-", id: 2 },
                        { name: "AB+", id: 1 }, { name: "AB-", id: 2 },
    { name: "O+", id: 1 }, { name: "O-", id: 2 }];
    $scope.selectedOption = $scope.options[1];

});