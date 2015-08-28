app.controller('FormController', function ($scope, $window, angularService) {
        
        $scope.Name = '';
        $scope.Email = '';
        $scope.edit = true;
        $scope.IsEmailExist = false;
        $scope.PasswordMismatch = false;
        var IsallInformationCorrect = true;
        
        function Clear() {
            $scope.Name="",
             $scope.BloodGroup=$scope.BloodGroups[0],
             $scope.DateOfBirth=null,
             $scope.Phone="",
             $scope.Email="",
             $scope.LastDonationDate=null,
             $scope.Address="",
             $scope.password1 = ""
            $scope.password2 = ""
        }

       
       
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
            if ($scope.password1 != $scope.password2) {
                $scope.PasswordMismatch = true;
                return;
            }
            var email = $scope.Email;
            var IsEmailAlreadyExist = angularService.IsEmailAlreadyExist(email);
            IsEmailAlreadyExist.then(function (obj) {
                //$scope.IsEmailExist = obj.data;
                if (obj.data=="True") {
                    $scope.IsEmailExist = true;
                    //alert("Email Already exist")
                    return;
                }
                else {
                    angularService.AddDonar(Model);
                    alert("Registration successfull")
                    return $window.location.href = 'Index';
                }
            }, function () {
                alert('Error in Email verification process');
            });     
            
            
        };
});