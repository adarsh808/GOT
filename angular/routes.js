myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix(''); //to get / inhome page
    $routeProvider
    .when('/', {
            templateUrl: 'views/home.html', //the first page showing all match details
            controller: 'homeController'
    })
    .when('/filter', {
        templateUrl: 'views/filter-view.html', //routing to page that aids filtering of data
        controller: 'homeController'
    })
    .when('/bookdet/:book', {
        templateUrl: 'views/book-detail.html', //the page that display details of a particular book using routeParam  
        controller: 'bookController'
    })
    .when('/chardet/:char', {
        templateUrl: 'views/char-detail.html', //the page that display details of a particular character using routeParam 
        controller: 'charController'
    })
    .when('/housedet/:house', {
        templateUrl: 'views/house-detail.html', //the page that display details of a particular house using routeParam 
        controller: 'houseController'
    })
    .when('/carousel1', {
            templateUrl: 'views/home.html', //the first page showing all match details
            controller: 'homeController'
    })
}])