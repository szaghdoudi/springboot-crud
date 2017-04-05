"use strict";
angular.module("springboot-crud").controller("UserController",
		[ "UserService", "$scope", function(UserService, $scope) {
			var self = this;
			self.user = {};
			self.users = [];
			self.getAllUsers = getAllUsers;
			self.successMessage = "";
			self.errorMessage = "";
			self.done = false;
			
			
			function getAllUsers(){
				alert("jjj")
				console.log("getAllUsers::begin")
				return UserService.getAllUsers();
			}
			
			
		}]);
		