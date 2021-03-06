// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngMaterial', 'starter.controllers', 'starter.services', 'ngMap'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
        $rootScope.BaseURL = "http://jewel:92/";
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
      controller: 'AppCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.booking', {
    url: '/booking',
    views: {
      'tab-booking': {
        templateUrl: 'templates/tab-booking.html',
        controller: 'BookCtrl'
      }
    }
  })

  .state('tab.share', {
    url: '/share',
    views: {
      'tab-share': {
        templateUrl: 'templates/tab-share.html',
        controller: 'ShareCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId/:name/:slug',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    .state('tab.book-now', {
      url: '/chats/:chatId/booknow',
      views: {
        'tab-chats': {
          templateUrl: 'templates/book-now.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    .state('tab.guest-info', {
      url: '/chats/:chatId/booknow/guest-info',
      views: {
        'tab-chats': {
          templateUrl: 'templates/guest-info.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('signup', {
      url: '/signup',
      templateUrl: 'templates/user-signup.html',
      controller: 'SignupCtrl'
  })

  .state('signin', {
    url: '/signin',
    templateUrl: 'templates/user-signin.html',
    controller: 'SigninCtrl'
  });

    //.state('search', {
    //    //url: '/signin',
    //    //templateUrl: 'templates/user-signin.html',
    //    controller: 'SearchCtrl'
    //});


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/chats');

});



