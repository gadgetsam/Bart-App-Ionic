angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {})

.controller('ChatsCtrl', function ($scope, Chats, $ionicPopup, $timeout, $ionicModal) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
    .factory('xmlParser', function () {
    var x2js = new X2JS();
    return {
      xml2json: x2js.xml2json,
      xml_str2json_withOutBind : x2js.xml_str2json,
      xml_str2json: function (args) {
        return angular.bind(x2js, x2js.xml_str2json, args)();
      },
      json2xml: x2js.json2xml_str
    }
  })


  .controller('MainCtrl', function($scope, $http, xmlParser, $interval) {

    var tripGetter = function(orgin, dest) {
      $http.get('http://api.bart.gov/api/sched.aspx?cmd=arrive&orig=' + orgin + '&dest=' + dest + '&date=now&key=MW9S-E7SL-26DU-VV8V&b=2&a=2&l=1').then(function (string) {
        //console.log('Success', string);

        $scope.tripobj =  xmlParser.xml_str2json(string.data);

        destination = $scope.tripobj.root.destination
        origin = $scope.tripobj.root.origin
        schedule = $scope.tripobj.root.schedule.request.trip
        trip = {"origin": origin,
          "destinatiob":destination,
          "trips": []

        }
        //console.log(schedule[0]);
        for (var i = 0; i < schedule.length; i++){
          origTime = schedule[i]._origTimeMin
          destTime = schedule[i]._destTimeMin
          fare = schedule[i]._destTimeMin
          trip.trips.push({'origTime':origTime, "destTime":destTime, "fare":fare})
          //console.log(trip.trips);
        };

        //$scope.currentDate = new Date();
        //
        //console.log($scope.currentdate.getHours() + ":"
        //  + $scope.currentdate.getMinutes() + ":" + $scope.currentdate.getSeconds())
        //return xmlParser.xml_str2json(string.data);
        return trip



        // For JSON responses, resp.data contains the result
      }, function (err) {
        console.error('ERR', err);
        // err.status will contain the status code
      });


    }
    var tripCounter = function(){
      $scope.trip = tripGetter("ASHB","CIVC")
      console.log("ran")
    }

    tripCounter();
    $interval(tripCounter, 30000);
    //console.log($scope.time)

  })

.controller('TimeCtrl', function($scope, $interval) {
  var tick = function() {
    timem = moment();
    $scope.sec =timem.format("ss");
    $scope.min = timem.format("mm");
    //console.log($scope.sec)
  }
  tick();
  $interval(tick, 1000);
});
