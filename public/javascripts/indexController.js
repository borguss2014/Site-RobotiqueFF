var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller("myCtrl", function($scope, $location){

  $scope.isActive = function(location){
    return location === $location.path();
  };

  $scope.currentTitle = function(){

    var location = $location.path();

    switch(location){
      case '/home':
        return "Home"
      case '/istoric':
        return "Istoric";
      case '/membrii':
        return "Membrii";
      case '/premii':
        return "Premii";
      case '/why-robotique':
        return "De ce RobotiqueFF ?";
      case '/noutati':
        return "Noutati";
      case '/detalii':
        return "Detalii cursuri";
      case '/descriere-roboti':
        return "Roboti";
      case '/contact':
        return "Contact"
    }

  };
});

myApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();
  });
});

myApp.config(['$routeProvider', function($routeProvider, $location){
  $routeProvider.when('/home', {
    templateUrl: 'content/home.html',
    controller: ['$scope', function($scope){
      $scope.title = "Home";
    }]
  })
  .when('/istoric', {
    templateUrl: 'content/istoric.html',
    controller: ['$scope', function($scope){
      $scope.title = "Istoric";
    }]
  })
  .when('/membrii', {
    templateUrl: 'content/membrii.html',
    controller: ['$scope', function($scope){
      $scope.title = "Membrii";
    }]
  })
  .when('/premii', {
    templateUrl: 'content/premii.html',
    controller: ['$scope', function($scope){
      $scope.title = "Premii";
    }]
  })
  .when('/why-robotique', {
    templateUrl: 'content/why-robotique.html',
    controller: ['$scope', function($scope){
      $scope.title = "De ce RobotiqueFF ?";
    }]
  })
  .when('/noutati', {
    templateUrl: 'content/noutati.html',
    controller: ['$scope', function($scope){
      $scope.title = "Noutati";
    }]
  })
  .when('/detalii', {
    templateUrl: 'content/detalii.html',
    controller: ['$scope', function($scope){
      $scope.title = "Detalii";
    }]
  })
  .when('/descriere-roboti', {
    templateUrl: 'content/descriere-roboti.html',
    controller: ['$scope', function($scope){
      $scope.title = "Descriere roboti";
    }]
  })
  .when('/contact', {
    templateUrl: 'content/contact.html',
    controller: ['$scope', function($scope){
      $scope.title = "Contact";
    }]
  })
  .otherwise({
    redirectTo: '/home'
  })
}]);
