//service that returns the http service call of the house data
myApp.service('data2Service', ['$http', function($http) {
    this.request = function() {
        this.baseUrl = 'https://www.anapioficeandfire.com/api';
        return $http({
            method: 'GET',
            url: this.baseUrl + '/houses'
        });

    }
}]);

