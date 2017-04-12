var app = angular.module("springboot-crud", [ "ui.router", "ngStorage" ]);

app.constant("urls", {
	BASE : "http://localhost:1010/springboot-crud/",
	USER_SERVICE_API : "http://localhost:1010/springboot-crud/api/user/"
})

app.config([ "$stateProvider","$locationProvider" ,"$urlRouterProvider", function($stateProvider,$locationProvider, $urlRouterProvider) {
	$stateProvider.state(
		"home",
		{
			url : "/",
			 templateUrl: 'partials/list',
             controller:'UserController',
             controllerAs:'ctrl',
			resolve : {
				users : function($q, UserService){
					console.log("Load all users");
					//var deferred = $q.defer();
					//console.log("Load all users1");
					var promise = UserService.loadAllUsers();
					//console.log("Load all users2");
					//console.log(promise);
					//promise.then(deferred.resolve,deferred.resolve);
					return UserService.loadAllUsers();
				}
			}
		});
	$urlRouterProvider.otherwise("/");
	$locationProvider.hashPrefix('');
}]);