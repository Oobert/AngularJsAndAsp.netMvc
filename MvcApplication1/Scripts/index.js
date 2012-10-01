angular.module('appOne', [], function ($routeProvider, $locationProvider) {
    $routeProvider.when('/AppOne/', { templateUrl: '/home/appone', controller: "appOneController" })
                  .when('/AppOne/Two', { templateUrl: '/home/apponeparttwo', controller: "appOnePartTwoController" })
                  .otherwise({ redirectTo: function (x, path, y) {
                      window.location.href = path;
                  }});

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});


function appOneController($scope) {

    $scope.helloWorld = "appOneController";

}

function appOnePartTwoController($scope) {

    $scope.helloWorld = "appOnePartTwoController";

}



angular.module('appTwo', [], function ($routeProvider, $locationProvider) {
    $routeProvider.when('/AppTwo/', { templateUrl: '/home/apptwo', controller: "appTwoController" })
                  .when('/AppTwo/Two', { templateUrl: '/home/apptwoparttwo', controller: "appTwoPartTwoController" })
                  .otherwise({ redirectTo: function (x, path, y) {
                      window.location.href = path;
                  }});
    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});


function appTwoController($scope) {

    $scope.helloWorld = "appTwoController";

}

function appTwoPartTwoController($scope) {

    $scope.helloWorld = "appTwoPartTwoController";

}