app.controller('FormController',function ($scope, angularService) {
        
        $scope.Name = '';
        $scope.Email = '';
        $scope.edit = true;
        $scope.error = false;
        $scope.incomplete = false;
        $scope.IsAllInformationCorrect = ($scope.password1 == null);
        //($scope.password1 == $scope.password2); 
       

       
       
        $scope.BloodGroups = [{ name: "A+", id: 1 }, { name: "A-", id: 2 }
                          , { name: "B+", id: 3 }, { name: "B-", id: 4 },
                            { name: "AB+", id: 5 }, { name: "AB-", id: 6 },
        { name: "O+", id: 7 }, { name: "O-", id: 8 }];
        $scope.BloodGroup = $scope.BloodGroups[0];

    //$http({ method: 'GET', url: 'Home/SignUp' + personIdFromQueryString }).success(function (data) {
    //    $scope.user = data;
    //});
        

        $scope.sendForm = function () {
            var Model = {
                FullName: $scope.Name,
                BloodGroup: $scope.BloodGroup.name,
                DateOfBirth: $scope.DateOfBirth,
                Phone: $scope.Phone,
                Email: $scope.Email,
                LastDateOfDonation: $scope.LastDonationDate,
                Address: $scope.Address,
                Password: $scope.password1
            };
            angularService.AddDonar(Model);
        };
});