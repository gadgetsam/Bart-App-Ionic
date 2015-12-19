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
});
