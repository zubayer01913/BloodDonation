
app.controller('SlideCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = [
        {
            image: '/Images/blood1.jpg',
            text: 'Save a Life Give Blood'
        },
        {
            image: '/Images/blood2.jpg',
            text: 'Donate Blood'
        },
        {
            image: '/Images/blood3.jpg',
            text: 'Give the Gift of Blood'
        },
        {
            image: '/Images/blood4.jpg',
            text: 'Give the Gift of Life'
        },
        {
            image: '/Images/blood5.jpg',
            text: 'Help Save a Life Donate Blood'
        }
    ];
});

app.controller('userCtrl', function ($scope, angularService) {
    //$scope.DonatorList = [{ Id: "1", Name: "Alfreds Futterkiste", Age: "23", Phone: "46576235978", Email: "example@emaple.com", Address: "mirpur", LastDonate: "" },
    // { Id: "2", Name: "Ana Trujillo Emparedados y helados", Age: "23", Phone: "46576235978", Email: "example@emaple.com", Address: "mirpur", LastDonate: "" },
    //];
   
    var getData = angularService.getDonarList();
    getData.then(function (obj) {
        $scope.DonatorList = obj.data;
    }, function () {
        alert('Error in getting records');
    });

       
});


app.filter('ageFilter', function () {
    function calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return function (birthdate) {
        return calculateAge(birthdate);
    };
});


app.filter("jsDate", function () {
    return function (x) {
        return new Date(parseInt(x.substr(6)));
    };
});