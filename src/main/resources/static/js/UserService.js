"use strict";

angular.module("springboot-crud").factory("UserService",
		[ "$localStorage", "$http", "$q", "urls", function($localStorage, $http, $q, urls) {
			var factory = {
				getAllUsers : getAllUsers,
				loadAllUsers : loadAllUsers
			};
			return factory;

			function loadAllUsers() {
				console.log("Fetching all users");
				var deffered = $q.defer();
				console.log(urls.USER_SERVIE_API);
				$http.get(urls.USER_SERVICE_API).then(function(response) {
					console.log("Fetched successfully all users");
					$localStorage.users = response.data;
					deffered.resolve(response);
				}, function(errorResponse) {
					console.error("Error while loading users");
					deffered.reject(errorResponse);
				});
				return deffered.promise;
			}

			function getAllUsers() {
				return $localStorage.users;
			}
		} ]);
