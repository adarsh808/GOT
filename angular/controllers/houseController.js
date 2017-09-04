//controller to get character details from the api from the service request 
myApp.controller('houseController', ['$scope', '$routeParams', '$http', 'data2Service', function($scope, $routeParams, $http, data2Service) {
    //geting the returned http request from the service 
    data2Service.request().then(function successCallback(response) {
        $scope.housedata = response.data;
        $scope.house1 = $routeParams.house;
        //accessing the api details by traversing
        for (i in $scope.housedata) {
            if ($scope.housedata[i].name == $scope.house1) {
                $scope.housename = $scope.housedata[i].name;
                $scope.coat = $scope.housedata[i].coatOfArms;
                $scope.region = $scope.housedata[i].region;
                $scope.founded = $scope.housedata[i].founded;
                $scope.titles = $scope.housedata[i].titles;
                $http.get($scope.housedata[i].overlord).then(function successCallback(response1) {
                    console.log(response1.data);
                    $scope.overlord = response1.data.name;
                }, function errorCallback(response1) {
                    alert("error");
                }); //end of http request for overlord
                $http.get($scope.housedata[i].founder).then(function successCallback(response1) {
                    console.log(response1.data);
                    $scope.founder = response1.data.name;
                }, function errorCallback(response1) {
                    alert("error");
                }); //end of httprequest for founder
                for (j in $scope.housedata[i].swornMembers) {
                    $scope.sworn = [];
                    $http.get($scope.housedata[i].swornMembers[j]).then(function successCallback(response1) {
                        console.log(response1.data);
                        $scope.sworn.push(response1.data.name);
                        console.log($scope.sworn);
                    }, function errorCallback(response1) {
                        alert("error");
                    }); //end of http request for sworn
                }
            }
        }
    }, function errorCallback(response) {
        alert('some error');
    }); // end of service requst call for house data 
}]); //end of controller