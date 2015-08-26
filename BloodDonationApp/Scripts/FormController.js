app.controller('FormController', function ($scope) {
    $scope.user = {};
    $scope.user.Name = '';
    $scope.Email = '';
    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;
    $scope.BloodGroups = [{ name: "A+", id: 1 }, { name: "A-", id: 2 }
                      , { name: "B+", id: 3 }, { name: "B-", id: 4 },
                        { name: "AB+", id: 5 }, { name: "AB-", id: 6 },
    { name: "O+", id: 7 }, { name: "O-", id: 8 }];
    $scope.user.BloodGroup = $scope.BloodGroups[1];

});