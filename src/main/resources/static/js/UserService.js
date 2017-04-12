"use strict";

angular
		.module("springboot-crud")
		.factory(
				"UserService",
				[
						"$localStorage",
						"$http",
						"$q",
						"urls",
						function($localStorage, $http, $q, urls) {
							var factory = {
								getUser : getUser,
								getAllUsers : getAllUsers,
								loadAllUsers : loadAllUsers,
								createUser : createUser,
								removeUser : removeUser,
								udpateUser : udpateUser
							};
							return factory;

							function getUser(id) {
								console.log("Fetching User with id : " + id);
								var deferred = $q.defer();
								$http
										.get(urls.USER_SERVICE_API + id)
										.then(
												function(response) {
													console
															.log("Fetched successfuly User with id: "
																	+ id);
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.log("Error while loading with id "
																	+ id);
													deferred
															.reject(errResponse);
												});
								return deferred.promise;
							}

							function loadAllUsers() {
								console.log("Fetching all users");
								var deferred = $q.defer();
								console.log(urls.USER_SERVICE_API);
								$http
										.get(urls.USER_SERVICE_API)
										.then(
												function(response) {
													console
															.log("Fetched successfully all users");
													$localStorage.users = response.data;
													console.log(response.data);
													console
															.log($localStorage.users);
													deferred
															.resolve($localStorage.users);
												},
												function(errorResponse) {
													console
															.error("Error while loading users");
													deferred
															.reject(errorResponse);
												});
								return deferred.promise;
							}

							function getAllUsers() {
								return $localStorage.users;
							}

							function createUser(user) {
								console.log("Creating User");
								var deferred = $q.defer();
								$http
										.post(urls.USER_SERVICE_API, user)
										.then(
												function(response) {
													loadAllUsers();
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.error("Error while creating User : "
																	+ errResponse.data.errorMessage);
													deffered
															.reject(errResponse);
												});
								return deferred.promise;
							}

							function udpateUser(user, id) {
								console.log("Updating User with id " + id);
								var deferred = $q.defer();
								$http
										.put(urls.User_SERVICE_API + id, user)
										.then(
												function(response) {
													loadAllUsers();
													deferred
															.resolve(response.data);
												},
												function(errResponse) {
													console
															.error("Error while updating User with id : "
																	+ id);
													deferred
															.reject(errResponse);
												});
								return deferred.promise;
							}

							function removeUser(id) {
								console.log("Removung user with id " + id);
								var deferred = $q.defer();
								$http.delete(urls.USER_SERVICE_API  + id).then(function(response){
									loadAllUsers();
									deferred.resolve(response.data);
								},function(errResponse){
									console.error("Error while removing User with id: "  + id);
									deferred.reject(errResponse);
								});
								return deferred.promise;
							}
							
						}

				]);
