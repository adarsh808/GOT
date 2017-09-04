//contoller that takes the response from the 3 apis and pushes the response to the data array.
myApp.controller('homeController', ['$scope', 'dataService','data1Service','data2Service',function($scope, dataService,data1Service,data2Service) { 
     $scope.data = []; 
   dataService.request().then(function successCallback(response){ 
          $scope.data.push.apply($scope.data,response.data); 
          console.log('got 1st data succefully pushed ', $scope.data);
//AFTER PUSHING SECOND API CALL
    data1Service.request().then(function successCallback(response){ 
          $scope.data.push.apply($scope.data,response.data); 
          console.log('got 2nd data succefully pushed ', $scope.data);
//AFTER PUSHING 2nd RESPONSE 3rd API CALL
     data2Service.request().then(function successCallback(response){ 
         $scope.data.push.apply($scope.data,response.data); 
         console.log($scope.data); 
            }, function errorCallback(response) 
   { 
    alert('some error'); 
   } 
   ) ; //end of 3rdst request call  
            }, function errorCallback(response) 
   { 
    alert('some error'); 
   } 
   ) ; //end of 2nd request call
            
   }, function errorCallback(response) 
   { 
    alert('some error'); 
   } 
   ); //end of 3rd request call
}]);//end of controller