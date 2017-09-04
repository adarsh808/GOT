//controller that gets details of the book api from the service request
myApp.controller('bookController', ['$scope', '$routeParams', '$http', 'dataService', function($scope, $routeParams, $http, dataService) {
    //geting the returned http request from the service 
    dataService.request().then(function successCallback(response) {
        $scope.bookdata = response.data;
        $scope.book1 = $routeParams.book;
        //accessing the api details by traversing
        for (i in $scope.bookdata) {
            if ($scope.bookdata[i].name == $scope.book1) {
                $scope.bookname = $scope.bookdata[i].name;
                $scope.author = $scope.bookdata[i].authors[0];
                $scope.media = $scope.bookdata[i].mediaType;
                $scope.country = $scope.bookdata[i].country;
                $scope.pages = $scope.bookdata[i].numberOfPages;
                $scope.publisher = $scope.bookdata[i].publisher;
                $scope.released = $scope.bookdata[i].released;
                for (j in $scope.bookdata[i].povCharacters) {
                    $scope.povs = [];
                    $http.get($scope.bookdata[i].povCharacters[j]).then(function successCallback(response1) {
                        console.log(response1.data);
                        $scope.povs.push(response1.data.name);
                        console.log($scope.povs);
                    }, function errorCallback(response1) {
                        alert("error");
                    }); //end of http request for pov characters
                }

            }
        }

    }, function errorCallback(response) {
        alert('some error');
    }); // end of http request for book data api 


}]); //end of controller