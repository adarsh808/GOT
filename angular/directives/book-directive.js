//directive for connecting to the view for displaying book list in a div 
myApp.directive("bookList",function(){
	return{
		restrict:'E',
		templateUrl:"views/book-list.html",
		replace:true,
		scope:{
           bookObject:"="
		}
	}
});