<!DOCTYPE html>
 
<html lang="en" ng-app="springboot-crud">
    <head>
        <title>${title}</title>
       
    </head>
    <body>
 
        <div ui-view></div>
        
        <script src="/springboot-crud/webjars/angularjs/1.6.2/angular.js"></script>
		<script src="/springboot-crud/webjars/angularjs/1.6.2/angular-resource.js"></script>
		<script src="/springboot-crud/webjars/angular-ui-router/0.4.2/release/angular-ui-router.js"></script>
		<script src="/springboot-crud/webjars/ngstorage/0.3.11/ngStorage.js"></script>
		<script src="/springboot-crud/js/app.js"></script>
		<script src="/springboot-crud/js/UserService.js"></script>
		<script src="/springboot-crud/js/UserController.js"></script>
		<link rel="stylesheet" 	href="/springboot-crud/webjars/bootstrap/3.3.7-1/css/bootstrap.css">
		 <link rel="stylesheet" href="/springboot-crud/css/app.css" />
    </body>
</html>