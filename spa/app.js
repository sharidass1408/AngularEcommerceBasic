var app=angular.module('myApp',['ngRoute','ngAnimate']);

app.config(function($routeProvider){
	$routeProvider
		.when('/books',{
			templateUrl:"partials/book-list.html",
			controller:"BookCtrl"
		})
		.when('/kart',{
			templateUrl:"partials/kart-list.html",
			controller:"kartCtrl"
		})
		.otherwise({
			redirectTo:"/books"
		});
});

app.factory('kartService',function(){
	var kart=[];
	return{
		getKart: function(){
			return kart;
		},
		addToKart: function(book){
			kart.push(book);
		},
		buy: function(book){
			alert("Thanks for buy the book", book.name);
		}
	}
});

app.factory('bookService',function(){
	var books=[
	{imgUrl:"adultery.jpeg",
	 name:"adultery",
	 price:205,
	 rating:4,
	 binding:"paper book",
	 publisher:"anad",
	 realeseDate:12/23/344,
	 details:"this book is very usefull for students and it has to be best in the world saikrish will perchage the book and read"
	 },
	{imgUrl:"geronimo.jpeg",
	 name:"geronimo",
	 price:205,
	 rating:4,
	 binding:"paper book",
	 publisher:"anad",
	 realeseDate:12/23/344,
	 details:"this book is very usefull for students and it has to be best in the world saikrish will perchage the book and read"},
	{imgUrl:"life-or-death.jpeg",
	 name:"life-or-death",
	 price:205,
	 rating:4,
	 binding:"paper book",
	 publisher:"anad",
	 realeseDate:12/23/344,
	 details:"this book is very usefull for students and it has to be best in the world saikrish will perchage the book and read"},
	{imgUrl:"playing.jpeg",
	 name:"playing",
	 price:205,
	 rating:4,
	 binding:"paper book",
	 publisher:"anad",
	 realeseDate:12/23/344,
	 details:"this book is very usefull for students and it has to be best in the world saikrish will perchage the book and read"},
	{imgUrl:"the-fault.jpeg",
	 name:"the-fault",
	 price:205,
	 rating:4,
	 binding:"paper book",
	 publisher:"anad",
	 realeseDate:12/23/344,
	 details:"this book is very usefull for students and it has to be best in the world saikrish will perchage the book and read"}];

	
	return {
		getBooks: function(){
			return books;
		},
		addToKart: function(book){
			
		}
	};
});


app.controller('kartCtrl',function($scope, kartService){
	$scope.kart=kartService.getKart();
	$scope.buy=function(book){
		kartService.buy(book);
	}
});

app.controller('HeaderCtrl',function($scope){
$scope.appDetails={
	title:"BookKart",
	tagline:"we have so many books"};
});

app.controller('BookCtrl',function($scope, bookService, kartService){
	$scope.books=bookService.getBooks();
	 
$scope.addToKart=function(book){
	kartService.addToKart(book);
}
});