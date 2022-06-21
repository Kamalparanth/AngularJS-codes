var app = angular.module('myapp',['ngRoute']);

app.config(['$routeProvider', function($routerProvider){
    $routerProvider
    .when('/solar',{
        templateUrl: "./pages/241.html",
        controller:'solar'
    })
    .when('/water',{
        templateUrl:"./pages/242.html",
        controller:'winter'
    })
}]);