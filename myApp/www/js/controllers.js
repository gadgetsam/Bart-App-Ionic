angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('ChatsCtrl', function($scope, Chats, $ionicPopup, $timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

    // Triggered on a button click, or some other target
$scope.showLookup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: "Departing From: <select><option>Blue</option><option selected>Green</option><option>Red</option</select>Going to: <select><option>Blue</option><option selected>Green</option><option>Red</option</select>",
    title: 'Select Destinations',
    subTitle: 'Select your trip',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Go</b>',
        type: 'button-positive',
        onTap: function(e) {
          //Include code here to add it to the array of stations and such
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

 };

 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

 // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}).factory('xmlParser', function () {
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

