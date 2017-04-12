"use strict";
angular
		.module("springboot-crud")
		.controller(
				"UserController",
				[
						"UserService",
						"$scope",
						function(UserService, $scope) {
							var self = this;
							self.user = {};
							self.users = [];
							self.getAllUsers = getAllUsers;
							self.updateUser = updateUser;
							self.createUser = createUser;
							self.editUser = editUser;
							self.removeUser = removeUser,
							self.submit = submit;
							self.reset = reset;
							self.successMessage = "";
							self.errorMessage = "";
							self.done = false;
							self.onlyIntegers = /^\d+$/;
							self.onlyNumbers = /^\d+([,.]\d+)?$/;

							function submit() {
								console.log("Submitting");
								if (self.user.id === undefined
										|| self.user.id === null) {
									console.log("Saving New User", self.user);
									createUser(self.user);
								} else {
									updateUser(self.user, self.user.id);
									console.log("User updated with id",
											self.user.id);
								}
							}

							function createUser(user) {
								console.log("About to create user");
								UserService
										.createUser(user)
										.then(
												function() {
													console
															.log("User created successfully");
													self.successMessage = "User created successfully";
													self.errorMessage = "";
													self.done = true;
													self.user = {};
													$scope.myForm
															.$setPristine();
												},
												function(errorResponse) {
													console
															.error("Error while updating User");
													self.errorMessage = "Error while updateing: "
															+ errResponse.data.errorMessage;
													self.successMessage = "";
												});
							}

							function updateUser(user, id) {
								console.log("About to update user");
								UserService
										.updateUser(user, id)
										.then(
												function(response) {
													console
															.log("User updated successfully");
													self.successMessage = "User update successfully";
													self.errorMessage = "";
													self.done = true;
													$scope.myForm
															.$setPristine();
												},
												function(errorResponse) {
													console
															.error("Error while updating user");
													self.errorMessage = "Eroor while updating User:  "
															+ errorResponse.data;
													self.successMessage = "";
												});
							}

							function editUser(id) {
								self.successMessage = "";
								self.errorMessage = "";
								UserService
										.getUser(id)
										.then(
												function(user) {
													self.user = user;
												},
												function(errResponse) {
													console
															.error("Error while removing user "
																	+ id
																	+ ", Error :"
																	+ errResponse.data);
												});
							}

							function getAllUsers() {
								console.log("getAllUsers::begin")
								return UserService.getAllUsers();
							}

							function reset() {
								self.successMessage = '';
								self.errorMessage = '';
								self.user = {};
								$scope.myForm.$setPristine(); // reset Form
							}

							function removeUser(id) {
								console.log("About to remove User with id "
										+ id);
								UserService.removeUser(id).then(function() {
									console.log("User " + id + " removed successfully");
								}, function(errResponse) {
									console.error("Error while removing user " +id + " Error :"+ errResponse.data );
								});

							}

						} ]);
