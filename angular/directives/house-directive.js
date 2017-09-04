//directive for connecting to the view for displaying house list in a div 

myApp.directive("houseList",function(){
	return{
		restrict:'E',
		templateUrl:"views/house-list.html",
		replace:true,
		scope:{
           houseObject:"="
		}
	}

});
    