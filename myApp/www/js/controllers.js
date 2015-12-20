angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {})

.controller('ChatsCtrl', function ($scope, Chats, $ionicPopup, $timeout, $ionicModal, $http, xmlParser, $interval) {
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

    //Ionic modal code
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

    //Below this line is all the code from MainCtrl. Need all the code to be here too because in the html it can only access information from it's own controller. It can't jump between controllers.

    //START OF MAINCTRL CODE

    var tripGetter = function (orgins, dests, num) {
        tripDic = JSON.parse(window.localStorage.getItem("trips")).params;
        console.log(tripDic);
        if (tripDic !== undefined && num == 1) {
            dict = tripDic
                //console.log(dict+"12");
        } else {
            dict = [[orgins, dests]]
            console.log(dict);
        }
        $scope.id = 0;
        for (var j = 0; j < dict.length; j++) {
            $scope.trips = []
            //console.log(dict+"123");
            orgin = dict[j][0]
            dest = dict[j][1]
            $http.get('http://api.bart.gov/api/sched.aspx?cmd=arrive&orig=' + orgin + '&dest=' + dest + '&date=now&key=MW9S-E7SL-26DU-VV8V&b=0&a=4&l=1').then(function (string) {
                //console.log('http://api.bart.gov/api/sched.aspx?cmd=arrive&orig=' + orgin + '&dest=' + dest + '&date=now&key=MW9S-E7SL-26DU-VV8V&b=2&a=2&l=1');


                tripobj = xmlParser.xml_str2json(string.data);

                console.log(tripobj);
                destination = tripobj.root.destination
                origin = tripobj.root.origin
                schedule = tripobj.root.schedule.request.trip

                trip = {
                        "origin": origin,
                        "destination": destination,
                        "id": $scope.id,
                        "trips": []

                    }
              $scope.id = $scope.id +1;
                    //console.log(schedule[0]);

                for (var i = 0; i < schedule.length; i++) {
                    origTime = schedule[i]._origTimeMin
                    destTime = schedule[i]._destTimeMin
                    fare = schedule[i]._destTimeMin
                    trip.trips.push({
                            'origTime': origTime,
                            "destTime": destTime,
                            "fare": fare
                        })
                        //console.log(trip.trips);
                };
                //return trip
                //console.log(trip)
                if (num == 1) {
                    if ($scope.trips == undefined) {
                        $scope.trips = [];
                    }
                    $scope.trips.push(trip)
                    console.log("this contains all the data for the ng repeat it is contained in a array called $scope.trips")
                    console.log($scope.trips);
                }



                // For JSON responses, resp.data contains the result
            }, function (err) {
                console.error('ERR', err);
                // err.status will contain the status code
            });


        }
    }
    var addRoute = function (origs, dests) {
        trips = JSON.parse(window.localStorage.getItem("trips"));


        if (trips == undefined) {
            //console.log(trips);
            window.localStorage.setItem("trips", JSON.stringify({
                params: [[origs, dests]]
            }));
            //console.log("run 1");
            //console.log(JSON.parse(window.localStorage.getItem("trips")));

        } else {
            //console.log(trips.params);
            array = JSON.parse(window.localStorage.getItem("trips")).params

            array.push([origs, dests]);

            window.localStorage.removeItem("trips")
            window.localStorage.setItem("trips", JSON.stringify({
                params: array
            }));
            //console.log(JSON.parse(window.localStorage.getItem("trips")));
        }
    };

    window.localStorage.removeItem("trips")
        //console.log(JSON.parse(window.localStorage.getItem("trips")));
    addRoute("ASHB", "CIVC");

    addRoute("12th", "CIVC");
    //console.log(JSON.parse(window.localStorage.getItem("trips")).params);
    //tripGetter("asd", "rasd", 1);
    $interval(tripGetter("asd","ras d",1), 1000);
    //console.log($scope.time)

    //END OF ALL THE MAINCTRL CODE

})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);

})

.controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })
    .controller('MainCtrl', function ($scope, $http, xmlParser, $interval) {

        var tripGetter = function (orgins, dests, num) {
            tripDic = JSON.parse(window.localStorage.getItem("trips")).params;
            console.log(tripDic);
            if (tripDic !== undefined && num == 1) {
                dict = tripDic
                    //console.log(dict+"12");
            } else {
                dict = [[orgins, dests]]
                console.log(dict);
            }
            for (var j = 0; j < dict.length; j++) {
                //console.log(dict+"123");
                orgin = dict[j][0]
                dest = dict[j][1]
                $http.get('http://api.bart.gov/api/sched.aspx?cmd=arrive&orig=' + orgin + '&dest=' + dest + '&date=now&key=MW9S-E7SL-26DU-VV8V&b=2&a=2&l=1').then(function (string) {
                    //console.log('Success', string);

                    tripobj = xmlParser.xml_str2json(string.data);

                    destination = tripobj.root.destination
                    origin = tripobj.root.origin
                    schedule = tripobj.root.schedule.request.trip
                    trip = {
                            "origin": origin,
                            "destination": destination,
                            "trips": []

                        }
                        //console.log(schedule[0]);
                    for (var i = 0; i < schedule.length; i++) {
                        origTime = schedule[i]._origTimeMin
                        destTime = schedule[i]._destTimeMin
                        fare = schedule[i]._destTimeMin
                        trip.trips.push({
                                'origTime': origTime,
                                "destTime": destTime,
                                "fare": fare
                            })
                            //console.log(trip.trips);
                    };
                    //return trip
                    //console.log(trip)
                    if (num == 1) {
                        if ($scope.trips == undefined) {
                            $scope.trips = [];
                        }
                        $scope.trips.push(trip)
                        console.log("this contains all the data for the ng repeat it is contained in a array called $scope.trips")
                        console.log($scope.trips);
                    }



                    // For JSON responses, resp.data contains the result
                }, function (err) {
                    console.error('ERR', err);
                    // err.status will contain the status code
                });


            }
        }
        var addRoute = function (origs, dests) {
            trips = JSON.parse(window.localStorage.getItem("trips"));


            if (trips == undefined) {
                //console.log(trips);
                window.localStorage.setItem("trips", JSON.stringify({
                    params: [[origs, dests]]
                }));
                //console.log("run 1");
                //console.log(JSON.parse(window.localStorage.getItem("trips")));

            } else {
                //console.log(trips.params);
                array = JSON.parse(window.localStorage.getItem("trips")).params

                array.push([origs, dests]);

                window.localStorage.removeItem("trips")
                window.localStorage.setItem("trips", JSON.stringify({
                    params: array
                }));
                //console.log(JSON.parse(window.localStorage.getItem("trips")));
            }
        };

        window.localStorage.removeItem("trips")
            //console.log(JSON.parse(window.localStorage.getItem("trips")));
        addRoute("ASHB", "CIVC");

        addRoute("12th", "CIVC");
        //console.log(JSON.parse(window.localStorage.getItem("trips")).params);
        tripGetter("asd", "rasd", 1);
        //$interval(tripGetter("asd","rasd",1), 1000);
        //console.log($scope.time)

    })

.controller('TimeCtrl', function ($scope, $interval) {
    var tick = function () {
        timem = moment();
        $scope.sec = timem.format("ss");
        $scope.min = timem.format("mm");
        //console.log($scope.sec)
    }
    tick();
    $interval(tick, 1000);
})
