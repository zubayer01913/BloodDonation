
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