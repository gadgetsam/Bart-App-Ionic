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

    // Ionic Modal for adding
    //Ionic modal code
    $ionicModal.fromTemplateUrl('my-modal2.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal2 = modal;
    });
    $scope.openModal = function () {
        $scope.modal2.show();
    };
    $scope.closeModal = function () {
        $scope.modal2.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal2.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });

    //Popup for nearest station
    // An alert dialog
    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Richmond',
            template: 'The nearest Station, Richmond Station, is 5.1 miles away'
        });

        alertPopup.then(function (res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };
    //End popup




})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);

})

.controller('AccountCtrl', function ($scope, $cordovaInAppBrowser) {
    $scope.settings = {
        enableFriends: true
    };

})


.controller('MainCtrl', function ($scope, $http, $state, $stateParams, xmlParser, $interval, $location) {
    var stationsAbbr = {
        "12TH": {
            "name": "12th St. Oakland City Center",
            "abbr": "12TH",
            "gtfs_latitude": "37.803664",
            "gtfs_longitude": "-122.271604",
            "address": "1245 Broadway",
            "city": "Oakland",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94612"
        },
        "16TH": {
            "name": "16th St. Mission",
            "abbr": "16TH",
            "gtfs_latitude": "37.765062",
            "gtfs_longitude": "-122.419694",
            "address": "2000 Mission Street",
            "city": "San Francisco",
            "county": "sanfrancisco",
            "state": "CA",
            "zipcode": "94110"
        },
        "19TH": {
            "name": "19th St. Oakland",
            "abbr": "19TH",
            "gtfs_latitude": "37.80787",
            "gtfs_longitude": "-122.269029",
            "address": "1900 Broadway",
            "city": "Oakland",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94612"
        },
        "24TH": {
            "name": "24th St. Mission",
            "abbr": "24TH",
            "gtfs_latitude": "37.752254",
            "gtfs_longitude": "-122.418466",
            "address": "2800 Mission Street",
            "city": "San Francisco",
            "county": "sanfrancisco",
            "state": "CA",
            "zipcode": "94110"
        },
        "ASHB": {
            "name": "Ashby",
            "abbr": "ASHB",
            "gtfs_latitude": "37.853024",
            "gtfs_longitude": "-122.26978",
            "address": "3100 Adeline Street",
            "city": "Berkeley",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94703"
        },
        "BALB": {
            "name": "Balboa Park",
            "abbr": "BALB",
            "gtfs_latitude": "37.72198087",
            "gtfs_longitude": "-122.4474142",
            "address": "401 Geneva Avenue",
            "city": "San Francisco",
            "county": "sanfrancisco",
            "state": "CA",
            "zipcode": "94112"
        },
        "BAYF": {
            "name": "Bay Fair",
            "abbr": "BAYF",
            "gtfs_latitude": "37.697185",
            "gtfs_longitude": "-122.126871",
            "address": "15242 Hesperian Blvd.",
            "city": "San Leandro",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94578"
        },
        "CAST": {
            "name": "Castro Valley",
            "abbr": "CAST",
            "gtfs_latitude": "37.690754",
            "gtfs_longitude": "-122.075567",
            "address": "3301 Norbridge Dr.",
            "city": "Castro Valley",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94546"
        },
        "CIVC": {
            "name": "Civic Center/UN Plaza",
            "abbr": "CIVC",
            "gtfs_latitude": "37.779528",
            "gtfs_longitude": "-122.413756",
            "address": "1150 Market Street",
            "city": "San Francisco",
            "county": "sanfrancisco",
            "state": "CA",
            "zipcode": "94102"
        },
        "COLS": {
            "name": "Coliseum",
            "abbr": "COLS",
            "gtfs_latitude": "37.754006",
            "gtfs_longitude": "-122.197273",
            "address": "7200 San Leandro St.",
            "city": "Oakland",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94621"
        },
        "COLM": {
            "name": "Colma",
            "abbr": "COLM",
            "gtfs_latitude": "37.684638",
            "gtfs_longitude": "-122.466233",
            "address": "365 D Street",
            "city": "Colma",
            "county": "sanmateo",
            "state": "CA",
            "zipcode": "94014"
        },
        "CONC": {
            "name": "Concord",
            "abbr": "CONC",
            "gtfs_latitude": "37.973737",
            "gtfs_longitude": "-122.029095",
            "address": "1451 Oakland Avenue",
            "city": "Concord",
            "county": "contracosta",
            "state": "CA",
            "zipcode": "94520"
        },
        "DALY": {
            "name": "Daly City",
            "abbr": "DALY",
            "gtfs_latitude": "37.70612055",
            "gtfs_longitude": "-122.4690807",
            "address": "500 John Daly Blvd.",
            "city": "Daly City",
            "county": "sanmateo",
            "state": "CA",
            "zipcode": "94014"
        },
        "DBRK": {
            "name": "Downtown Berkeley",
            "abbr": "DBRK",
            "gtfs_latitude": "37.869867",
            "gtfs_longitude": "-122.268045",
            "address": "2160 Shattuck Avenue",
            "city": "Berkeley",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94704"
        },
        "DUBL": {
            "name": "Dublin/Pleasanton",
            "abbr": "DUBL",
            "gtfs_latitude": "37.701695",
            "gtfs_longitude": "-121.900367",
            "address": "5801 Owens Dr.",
            "city": "Pleasanton",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94588"
        },
        "DELN": {
            "name": "El Cerrito del Norte",
            "abbr": "DELN",
            "gtfs_latitude": "37.925655",
            "gtfs_longitude": "-122.317269",
            "address": "6400 Cutting Blvd.",
            "city": "El Cerrito",
            "county": "contracosta",
            "state": "CA",
            "zipcode": "94530"
        },
        "PLZA": {
            "name": "El Cerrito Plaza",
            "abbr": "PLZA",
            "gtfs_latitude": "37.9030588",
            "gtfs_longitude": "-122.2992715",
            "address": "6699 Fairmount Avenue",
            "city": "El Cerrito",
            "county": "contracosta",
            "state": "CA",
            "zipcode": "94530"
        },
        "EMBR": {
            "name": "Embarcadero",
            "abbr": "EMBR",
            "gtfs_latitude": "37.792976",
            "gtfs_longitude": "-122.396742",
            "address": "298 Market Street",
            "city": "San Francisco",
            "county": "sanfrancisco",
            "state": "CA",
            "zipcode": "94111"
        },
        "FRMT": {
            "name": "Fremont",
            "abbr": "FRMT",
            "gtfs_latitude": "37.557355",
            "gtfs_longitude": "-121.9764",
            "address": "2000 BART Way",
            "city": "Fremont",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94536"
        },
        "FTVL": {
            "name": "Fruitvale",
            "abbr": "FTVL",
            "gtfs_latitude": "37.774963",
            "gtfs_longitude": "-122.224274",
            "address": "3401 East 12th Street",
            "city": "Oakland",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94601"
        },
        "GLEN": {
            "name": "Glen Park",
            "abbr": "GLEN",
            "gtfs_latitude": "37.732921",
            "gtfs_longitude": "-122.434092",
            "address": "2901 Diamond Street",
            "city": "San Francisco",
            "county": "sanfrancisco",
            "state": "CA",
            "zipcode": "94131"
        },
        "HAYW": {
            "name": "Hayward",
            "abbr": "HAYW",
            "gtfs_latitude": "37.670399",
            "gtfs_longitude": "-122.087967",
            "address": "699 'B' Street",
            "city": "Hayward",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94541"
        },
        "LAFY": {
            "name": "Lafayette",
            "abbr": "LAFY",
            "gtfs_latitude": "37.893394",
            "gtfs_longitude": "-122.123801",
            "address": "3601 Deer Hill Road",
            "city": "Lafayette",
            "county": "contracosta",
            "state": "CA",
            "zipcode": "94549"
        },
        "LAKE": {
            "name": "Lake Merritt",
            "abbr": "LAKE",
            "gtfs_latitude": "37.797484",
            "gtfs_longitude": "-122.265609",
            "address": "800 Madison Street",
            "city": "Oakland",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94607"
        },
        "MCAR": {
            "name": "MacArthur",
            "abbr": "MCAR",
            "gtfs_latitude": "37.828415",
            "gtfs_longitude": "-122.267227",
            "address": "555 40th Street",
            "city": "Oakland",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94609"
        },
        "MLBR": {
            "name": "Millbrae",
            "abbr": "MLBR",
            "gtfs_latitude": "37.599787",
            "gtfs_longitude": "-122.38666",
            "address": "200 North Rollins Road",
            "city": "Millbrae",
            "county": "sanmateo",
            "state": "CA",
            "zipcode": "94030"
        },
        "MONT": {
            "name": "Montgomery St.",
            "abbr": "MONT",
            "gtfs_latitude": "37.789256",
            "gtfs_longitude": "-122.401407",
            "address": "598 Market Street",
            "city": "San Francisco",
            "county": "sanfrancisco",
            "state": "CA",
            "zipcode": "94104"
        },
        "NBRK": {
            "name": "North Berkeley",
            "abbr": "NBRK",
            "gtfs_latitude": "37.87404",
            "gtfs_longitude": "-122.283451",
            "address": "1750 Sacramento Street",
            "city": "Berkeley",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94702"
        },
        "NCON": {
            "name": "North Concord/Martinez",
            "abbr": "NCON",
            "gtfs_latitude": "38.003275",
            "gtfs_longitude": "-122.024597",
            "address": "3700 Port Chicago Highway",
            "city": "Concord",
            "county": "contracosta",
            "state": "CA",
            "zipcode": "94520"
        },
        "OAKL": {
            "name": "Oakland Int'l Airport",
            "abbr": "OAKL",
            "gtfs_latitude": "37.71297174",
            "gtfs_longitude": "-122.21244024",
            "address": "4 Airport Drive",
            "city": "Oakland",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94621"
        },
        "ORIN": {
            "name": "Orinda",
            "abbr": "ORIN",
            "gtfs_latitude": "37.87836087",
            "gtfs_longitude": "-122.1837911",
            "address": "11 Camino Pablo",
            "city": "Orinda",
            "county": "contracosta",
            "state": "CA",
            "zipcode": "94563"
        },
        "PITT": {
            "name": "Pittsburg/Bay Point",
            "abbr": "PITT",
            "gtfs_latitude": "38.018914",
            "gtfs_longitude": "-121.945154",
            "address": "1700 West Leland Road",
            "city": "Pittsburg",
            "county": "contracosta",
            "state": "CA",
            "zipcode": "94565"
        },
        "PHIL": {
            "name": "Pleasant Hill/Contra Costa Centre",
            "abbr": "PHIL",
            "gtfs_latitude": "37.928403",
            "gtfs_longitude": "-122.056013",
            "address": "1365 Treat Blvd.",
            "city": "Walnut Creek",
            "county": "contracosta",
            "state": "CA",
            "zipcode": "94597"
        },
        "POWL": {
            "name": "Powell St.",
            "abbr": "POWL",
            "gtfs_latitude": "37.784991",
            "gtfs_longitude": "-122.406857",
            "address": "899 Market Street",
            "city": "San Francisco",
            "county": "sanfrancisco",
            "state": "CA",
            "zipcode": "94102"
        },
        "RICH": {
            "name": "Richmond",
            "abbr": "RICH",
            "gtfs_latitude": "37.936887",
            "gtfs_longitude": "-122.353165",
            "address": "1700 Nevin Avenue",
            "city": "Richmond",
            "county": "contracosta",
            "state": "CA",
            "zipcode": "94801"
        },
        "ROCK": {
            "name": "Rockridge",
            "abbr": "ROCK",
            "gtfs_latitude": "37.844601",
            "gtfs_longitude": "-122.251793",
            "address": "5660 College Avenue",
            "city": "Oakland",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94618"
        },
        "SBRN": {
            "name": "San Bruno",
            "abbr": "SBRN",
            "gtfs_latitude": "37.637753",
            "gtfs_longitude": "-122.416038",
            "address": "1151 Huntington Avenue",
            "city": "San Bruno",
            "county": "sanmateo",
            "state": "CA",
            "zipcode": "94066"
        },
        "SFIA": {
            "name": "San Francisco Int'l Airport",
            "abbr": "SFIA",
            "gtfs_latitude": "37.616035",
            "gtfs_longitude": "-122.392612",
            "address": "International Terminal, Level 3",
            "city": "San Francisco Int'l Airport",
            "county": "sanmateo",
            "state": "CA",
            "zipcode": "94128"
        },
        "SANL": {
            "name": "San Leandro",
            "abbr": "SANL",
            "gtfs_latitude": "37.72261921",
            "gtfs_longitude": "-122.1613112",
            "address": "1401 San Leandro Blvd.",
            "city": "San Leandro",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94577"
        },
        "SHAY": {
            "name": "South Hayward",
            "abbr": "SHAY",
            "gtfs_latitude": "37.63479954",
            "gtfs_longitude": "-122.0575506",
            "address": "28601 Dixon Street",
            "city": "Hayward",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94544"
        },
        "SSAN": {
            "name": "South San Francisco",
            "abbr": "SSAN",
            "gtfs_latitude": "37.664174",
            "gtfs_longitude": "-122.444116",
            "address": "1333 Mission Road",
            "city": "South San Francisco",
            "county": "sanmateo",
            "state": "CA",
            "zipcode": "94080"
        },
        "UCTY": {
            "name": "Union City",
            "abbr": "UCTY",
            "gtfs_latitude": "37.591208",
            "gtfs_longitude": "-122.017867",
            "address": "10 Union Square",
            "city": "Union City",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94587"
        },
        "WCRK": {
            "name": "Walnut Creek",
            "abbr": "WCRK",
            "gtfs_latitude": "37.905628",
            "gtfs_longitude": "-122.067423",
            "address": "200 Ygnacio Valley Road",
            "city": "Walnut Creek",
            "county": "contracosta",
            "state": "CA",
            "zipcode": "94596"
        },
        "WDUB": {
            "name": "West Dublin/Pleasanton",
            "abbr": "WDUB",
            "gtfs_latitude": "37.699759",
            "gtfs_longitude": "-121.928099",
            "address": "6501 Golden Gate Drive",
            "city": "Dublin",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94568"
        },
        "WOAK": {
            "name": "West Oakland",
            "abbr": "WOAK",
            "gtfs_latitude": "37.80467476",
            "gtfs_longitude": "-122.2945822",
            "address": "1451 7th Street",
            "city": "Oakland",
            "county": "alameda",
            "state": "CA",
            "zipcode": "94607"
        }
    }
    var stationName = {
        "12th St. Oakland City Center": "12TH",
        "16th St. Mission": "16TH",
        "19th St. Oakland": "19TH",
        "24th St. Mission": "24TH",
        "Ashby": "ASHB",
        "Balboa Park": "BALB",
        "Bay Fair": "BAYF",
        "Castro Valley": "CAST",
        "Civic Center/UN Plaza": "CIVC",
        "Coliseum": "COLS",
        "Colma": "COLM",
        "Concord": "CONC",
        "Daly City": "DALY",
        "Downtown Berkeley": "DBRK",
        "Dublin/Pleasanton": "DUBL",
        "El Cerrito del Norte": "DELN",
        "El Cerrito Plaza": "PLZA",
        "Embarcadero": "EMBR",
        "Fremont": "FRMT",
        "Fruitvale": "FTVL",
        "Glen Park": "GLEN",
        "Hayward": "HAYW",
        "Lafayette": "LAFY",
        "Lake Merritt": "LAKE",
        "MacArthur": "MCAR",
        "Millbrae": "MLBR",
        "Montgomery St.": "MONT",
        "North Berkeley": "NBRK",
        "North Concord/Martinez": "NCON",
        "Oakland Int'l Airport": "OAKL",
        "Orinda": "ORIN",
        "Pittsburg/Bay Point": "PITT",
        "Pleasant Hill/Contra Costa Centre": "PHIL",
        "Powell St.": "POWL",
        "Richmond": "RICH",
        "Rockridge": "ROCK",
        "San Bruno": "SBRN",
        "San Francisco Int'l Airport": "SFIA",
        "San Leandro": "SANL",
        "South Hayward": "SHAY",
        "South San Francisco": "SSAN",
        "Union City": "UCTY",
        "Walnut Creek": "WCRK",
        "West Dublin/Pleasanton": "WDUB",
        "West Oakland": "WOAK"
    }
    $scope.tripGetter = function (orgins, dests, num) {

        var banana = false;
        tripDic = JSON.parse(window.localStorage.getItem("trips")).params;
        console.log("update");
        if (tripDic !== undefined && num == 1) {
            dict = tripDic
            console.log(dict);
        } else {
            dict = [[stationName[orgins], stationName[dests]]]
            console.log(dict);
        }
        id = 0;
        for (var j = 0; j < dict.length; j++) {
            //console.log(dict+"123");
            orgin = dict[j][0]
            dest = dict[j][1]
            $http.get(
                'http://api.bart.gov/api/sched.aspx?cmd=depart&orig=' + orgin + '&dest=' + dest + '&date=now&key=MW9S-E7SL-26DU-VV8V&b=0&a=4&l=1'
            ).then(function (string) {
                //console.log('Success', string);

                tripobj = xmlParser.xml_str2json(string.data);

                //hi = {};
                //for (var i = 0; i < tripobj.stations.station.length; i++) {
                //      t= tripobj.stations.station[i]
                //    hi[t.name] = t.abbr
                //
                //}
                console.log(tripobj.root)

                destination = tripobj.root.destination
                origin = tripobj.root.origin
                schedule = tripobj.root.schedule.request.trip
                    //console.log(stationsAbbr[origin].name)

                trip = {
                    "origin": stationsAbbr[origin].name,
                    "destination": stationsAbbr[destination].name,
                    "id": id,
                    "trips": []

                }
                id = id + 1
                    //console.log(trip.origin)
                    //console.log(schedule[0]);
                for (var i = 0; i < schedule.length; i++) {
                    routes = tripobj.root.schedule.request.trip[i].leg
                        //console.log("routes")
                        //console.log(routes)
                    if (routes.length >= 2) {
                        station = routes[0]._trainHeadStation
                            //console.log(1)
                            //console.log(routes)
                        route = routes[0]._line.substr(5, routes[0]._line.length - 5)
                    } else {
                        station = routes._trainHeadStation
                            //console.log(2)
                            //console.log(routes)
                        route = routes._line.substr(5, routes._line.length - 5)

                    }
                    //$http.get(
                    //  'http://ad.sfbart.org/api/sched.aspx?cmd=load&ld1='+origin+'&ld2=BAYF0331&ld3=19TH0217&st=w'
                    //).then(function (string) {
                    //    $scope.load;
                    //  })

                    //console.log(route)
                    origTime = schedule[i]._origTimeMin
                    destTime = schedule[i]._destTimeMin
                    fare = "$" + schedule[i]._fare
                    trip.trips.push({
                            'origTime': origTime,
                            "destTime": destTime,
                            "fare": fare,

                            "headStation": stationsAbbr[station].name,
                            "routes": route
                        })
                        //console.log(trip)
                        //console.log(trip.trips);
                };
                //return trip
                //console.log(trip)
                if (num == 1) {
                    if ($scope.trips == undefined) {
                        $scope.trips = [];
                    }
                    $scope.trips.push(trip)

                    //console.log("this contains all the data for the ng repeat it is contained in a array called $scope.trips")
                    //console.log($scope.trips);
                }
                if (num == 0) {
                    $scope.tripTemp = trip;
                    console.log($scope.tripTemp);
                }
                if (num == 3) {
                    if ($scope.trips == undefined) {
                        $scope.trips = [];
                    }
                    $scope.trips.push(trip)
                }


                // For JSON responses, resp.data contains the result
            }, function (err) {
                console.error('ERR', err);
                // err.status will contain the status code
            });


        }
        banana = true;

        $scope.banana = banana;
    }
    $scope.addRoute = function (origsd, destsd) {
        tripsd = JSON.parse(window.localStorage.getItem("trips"));
        origs = stationName[origsd];
        dests = stationName[destsd];
        console.log(origsd)
        console.log(destsd)


        if (tripsd == undefined) {
            //console.log(trips);
            window.localStorage.setItem("trips", JSON.stringify({
                params: [[origs, dests]]
            }));
            //console.log("run 1");
            $scope.tripGetter(origsd, destsd, 3)
                //console.log(JSON.parse(window.localStorage.getItem("trips")));

        } else {
            //console.log(trips.params);
            array = JSON.parse(window.localStorage.getItem("trips")).params

            array.push([origs, dests]);

            window.localStorage.removeItem("trips")
            window.localStorage.setItem("trips", JSON.stringify({
                params: array
            }));
            $scope.tripGetter(origsd, destsd, 3)
                //console.log(JSON.parse(window.localStorage.getItem("trips")));
        }
    };
    $scope.deleteRoute = function (id) {

        tripse = JSON.parse(window.localStorage.getItem("trips")).params;
        //console.log(tripse)
        tripse.splice(id, 1);
        window.localStorage.setItem("trips", JSON.stringify({
            params: tripse
        }));
        //console.log(tripse)



    }
    $scope.update = function (id) {
        $scope.currentId = id;
        //
    }
    $scope.update2 = function () {
            console.log("update");
            //$scope.tripGetter("asd","rasd",1);
        }
        //window.localStorage.removeItem("trips")
        //    //console.log(JSON.parse(window.localStorage.getItem("trips")));
        //$scope.addRoute("Glen Park", "Balboa Park");
    $scope.update(0);


    $scope.tripGetter("sda", "dsa", 1)

    //$interval($scope.update(1), 100);
    //console.log($scope.time)
    $scope.reload = function () {
        console.log("reload was initiated brah")
        $state.go($state.current, {}, {
            reload: true
        });
        console.log("reload was a success brah")
    }
    $scope.tabgo = function(){
        $state.go($state.current, {}, { reload: true }); //second parameter is for $stateParams
        console.log("success")
    }
    
    $scope.doRefresh = function () {
        $http.get('/new-items')
            .success(function (newItems) {
                $scope.items = newItems;
            })
            .finally(function () {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            });
    };

})

.controller('TimeCtrl', function ($scope, $interval, $location) {
    var tick = function () {
        time = moment();
        $scope.sec = time.format("ss");
        $scope.min = time.format("mm");
        $scope.hour = time.format("hh");
        console.log($scope.currentId)
            //$scope.currentId = $location.$$absUrl.substr($location.$$absUrl.length -1);
            //console.log($scope.sec)
    }
    tick();


    $interval(tick, 1000);
})