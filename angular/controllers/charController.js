//controller to get character details from the api from the service request 
myApp.controller('charController', ['$scope', '$routeParams', '$http', 'data1Service', function($scope, $routeParams, $http, data1Service) {
    //geting the returned http request from the service 
    data1Service.request().then(function successCallback(response) {
        $scope.chardata = response.data;
        $scope.char1 = $routeParams.char;
        //accessing the api details by traversing
        for (i in $scope.chardata) {
            if ($scope.chardata[i].name == $scope.char1) {
                $scope.charname = $scope.chardata[i].name;
                $scope.gender = $scope.chardata[i].gender;
                $scope.born = $scope.chardata[i].born;
                $scope.died = $scope.chardata[i].died;
                $scope.culture = $scope.chardata[i].culture;

                for (j in $scope.chardata[i].books) {
                    $scope.books = [];
                    $http.get($scope.chardata[i].books[j]).then(function successCallback(response1) {
                        console.log(response1.data);
                        $scope.books.push(response1.data.name);
                        console.log($scope.books);
                    }, function errorCallback(response1) {
                        alert("error");
                    }); //end of books http request
                }
            }
        }
    }, function errorCallback(response) {
        alert('some error');
    }); //end of character http request
}]); //end of charController