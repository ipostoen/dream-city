
angular.module('App', [ 'ngMaterial', 'ngRoute', 'ngMessages', 'ngCookies', 'ngSanitize', 'cl.paging', 'textAngular']);

angular.module('App').config(function($mdThemingProvider) {

    // Extend the cyan theme with a few different colors
    var blueGrey = $mdThemingProvider.extendPalette('cyan', {
      '500': '568AB7',
      'contrastDefaultColor': 'light'
    });

    // Extend the amber theme with a few different colors
    var lightAmber = $mdThemingProvider.extendPalette('amber', {
      '500': 'E6C14D'
    });

    // Register the new color palette
    $mdThemingProvider.definePalette('blueGrey', blueGrey);

    // Register the new color palette
    $mdThemingProvider.definePalette('lightAmber', lightAmber);

    $mdThemingProvider.theme('default')
    .primaryPalette('blueGrey')
    .accentPalette('lightAmber');
  }
);

angular.module('App').config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/place', {
        templateUrl : 'templates/place/place.html',
        controller  : 'PlaceController'
      }).
      when('/add_place', {
        templateUrl : 'templates/place/create.html',
        controller  : 'AddPlaceController'
      }).
      when('/gcm', {
        templateUrl : 'templates/gcm/gcm.html',
        controller  : 'GcmController'
      }).
      when('/setting', {
        templateUrl : 'templates/setting/setting.html',
        controller  : 'SettingController'
      }).
      when('/about', {
        templateUrl : 'templates/about/about.html',
        controller  : 'AboutController'
      }).
      when('/login', {
        templateUrl : 'templates/login/login.html',
        controller  : 'LoginController'
      }).
      otherwise({
        redirectTo  : '/login'
      });
}]);

angular.module('App').run(function($location, $rootScope, $cookies) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    // $rootScope.title = current.$$route.title;
  });
});

angular.module('App').factory('focus', function($timeout, $window) {
    return function(id) {
		// timeout makes sure that is invoked after any other event has been triggered.
		// e.g. click events that need to run before the focus or inputs elements that are in a disabled state but are enabled when those events are triggered.
		$timeout(function() {
			var element = $window.document.getElementById(id);
			if(element)element.focus();
		});
	};
});
