//directive for connecting to the view for displaying character list in a div 
myApp.directive("charList",function(){
	return{
		restrict:'E',
		templateUrl:"views/char-list.html",
		replace:true,
		scope:{
           charObject:"="
		}
	}

});