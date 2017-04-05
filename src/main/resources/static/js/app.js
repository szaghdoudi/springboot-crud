var app = angular.module("springboot-crud", [ "ui.router", "ngStorage" ]);

app.constant("urls", {
	BASE : "http://localhost:1010/springboot-crud/",
	USER_SERVICE_API : "http://localhost:1010/springboot-crud/api/user"
})

app.config([ "$stateProvider","$locationProvider" ,"$urlRouterProvider", function($stateProvider,$locationProvider, $urlRouterProvider) {
	$stateProvider.state(
		"home",
		{
			url : "/",
			templateUrl : "partials/list",
			controller : "UserController",
			controllersAs : "ctrl",
			resolve : {
				users : function($q, UserService){
					console.log("Load all users");
					var deffered = $q.defer();
					UserService.loadAllUsers().then(deffered.resolve,deffered.resolve);
					return deffered.promise;
				}
			}
		});
	$urlRouterProvider.otherwise("/");
	$locationProvider.hashPrefix('');
}]);