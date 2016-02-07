angular.module('starter.controllers', [])

//.controller('customersCtrl', function($scope, $http) {
//    $http.get("http://jewel:92/api/hotellists/key").then(function(response) {
//        console.log(response);
//        $scope.hotelData = response.data.data;
//    });
//})


  .controller('AppCtrl', function ($scope, $ionicTabsDelegate) {
    $scope.goForward = function () {
      var selected = $ionicTabsDelegate.selectedIndex();
      if (selected != -1) {
        $ionicTabsDelegate.select(selected + 1);
      }
    };

    $scope.goBack = function () {
      var selected = $ionicTabsDelegate.selectedIndex();
      if (selected != -1 && selected != 0) {
        $ionicTabsDelegate.select(selected - 1);
      }
    }
  })
  .controller('BookCtrl', function ($scope, $http) {
    $scope.userInfo = {};
    $scope.SubmitPost = function (item) {
    console.log("scope userinfo=",$scope.userInfo, "item= ",item, "full object= ",{name: item.name, lat: item.lat, lon: item.lon});
      $http.post("http://localhost:1337/test/create",item).success(function (data) {
        //alert(JSON.stringify(data));
      });


    }
  })

  .controller('ShareCtrl', function ($scope) {
  })

  .controller('SignupCtrl', function ($scope) {
  })

  .controller('SigninCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, Chats, $http) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $http.get("http://jewel:92/api/hotellists/key").then(function (response) {
      console.log(response);
      $scope.hotelData = response.data.data;
    });

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats, $http) {
    $scope.chat = Chats.get($stateParams.chatId);
    $scope.title = $stateParams.name;
    $scope.hotelDetailsData = {};
    $http.get("http://jewel:92/api/hoteldetails/key=" + $stateParams.chatId + "&slug=" + $stateParams.slug).then(function (response) {
      console.log(response);
      $scope.hotelDetailsData = response.data.data[0];
    });
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  //controller for autocomplate search

  .controller('SearchCtrl', SearchCtrl);
function SearchCtrl($timeout, $q, $log) {
  var self = this;
  self.simulateQuery = false;
  self.isDisabled = false;
  // list of `state` value/display objects
  self.states = loadAll();
  self.querySearch = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.searchTextChange = searchTextChange;
  self.newState = newState;
  function newState(state) {
    alert("Sorry! You'll need to create a Constituion for " + state + " first!");
  }

  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for states... use $timeout to simulate
   * remote dataservice call.
   */
  function querySearch(query) {
    var results = query ? self.states.filter(createFilterFor(query)) : self.states,
      deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () {
        deferred.resolve(results);
      }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }

  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }

  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
  }

  /**
   * Build `states` list of key/value pairs
   */
  function loadAll() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
    return allStates.split(/, +/g).map(function (state) {
      return {
        value: state.toLowerCase(),
        display: state
      };
    });
  }

  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };
  }
}

//====================================



