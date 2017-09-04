//service that returns the http service call of the character data
myApp.service('data1Service', ['$http', function($http) {
    this.request = function() {
        this.baseUrl = 'https://www.anapioficeandfire.com/api';
        return $http({
            method: 'GET',
            url: this.baseUrl + '/characters?pageSize=50'
        });

    }
}]);