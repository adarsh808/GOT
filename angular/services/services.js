myApp.service('dataService',['$http',function($http){ 
   this.request =function() {
   	this.baseUrl='https://www.anapioficeandfire.com/api';
  return   $http({ 
    method:'GET', 
    url:this.baseUrl+'/books'
   });
   
}
}]); 

myApp.service('data1Service',['$http',function($http){ 
   this.request =function() {
   	this.baseUrl='https://www.anapioficeandfire.com/api';
  return   $http({ 
    method:'GET', 
    url:this.baseUrl+'/characters?pageSize=50'
   });
   
}
}]); 

myApp.service('data2Service',['$http',function($http){ 
   this.request =function() {
   	this.baseUrl='https://www.anapioficeandfire.com/api';
  return   $http({ 
    method:'GET', 
    url:this.baseUrl+'/houses'
   });
   
}
}]); 

