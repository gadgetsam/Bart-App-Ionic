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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
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

        return trip



        // For JSON responses, resp.data contains the result
      }, function (err) {
        console.error('ERR', err);
        // err.status will contain the status code
      });


    }
    var addRoute = function(origs, dests){
      trips = JSON.parse(window.localStorage.getItem("trips"));


            if(trips== undefined) {
              console.log(trips);
            window.localStorage.setItem("trips", JSON.stringify({params:[[origs,dests]]}));
              console.log("run 1");
              console.log(JSON.parse(window.localStorage.getItem("trips")));

          }
          else{
              console.log(trips.params);
              console.log(JSON.parse(window.localStorage.getItem("trips")));
              console.log("run 2");
              console.log(trips.params.push([origs,dests]));
              //window.localStorage.removeItem("trips")
              //window.localStorage.setItem("trips", JSON.stringify({params:trips.params.push([origs,dests])}));
              console.log(JSON.parse(window.localStorage.getItem("trips")));
            }};
          var tripCounter = function(){
      trips =JSON.parse(window.localStorage.getItem("trips")).params;
      //console.log(trips);
      if( trips!== undefined) {

        $scope.trip = tripGetter(trips[0][0],trips[0][1])
      }

      console.log("ran")
    }
    window.localStorage.removeItem("trips")

    addRoute("ASHB","CIVC");
    console.log(JSON.parse(window.localStorage.getItem("trips")).params);
    addRoute("ASHBs","CIVCs");
    //console.log(JSON.parse(window.localStorage.getItem("trips")).params);
    tripCounter();
    $interval(tripCounter, 1000);
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
})


