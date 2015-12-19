angular.module('bartApp', [])
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
  .controller('MainCtrl', function($scope, $http, xmlParser) {

      var tripGetter = function(orgin, dest) {
        $http.get('http://api.bart.gov/api/sched.aspx?cmd=arrive&orig=' + orgin + '&dest=' + dest + '&date=now&key=MW9S-E7SL-26DU-VV8V&b=2&a=2&l=1').then(function (string) {
          console.log('Success', string);

          $scope.tripobj =  xmlParser.xml_str2json(string.data);

          destination = $scope.tripobj.root.destination
          origin = $scope.tripobj.root.origin
          schedule = $scope.tripobj.root.schedule.request.trip
          trip = {"origin": origin,
            "destinatiob":destination,
            "trips": []

          }
          console.log(schedule[0]);
          for (var i = 0; i < schedule.length; i++){
              origTime = schedule[i]._origTimeMin
              destTime = schedule[i]._destTimeMin
              fare = schedule[i]._destTimeMin
              trip.trips.push({'origTime':origTime, "destTime":destTime, "fare":fare})
              console.log(trip.trips);
          };
          var unixTimestamp = Date.now();
          console.log(unixTimestamp)
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
    $scope.trip = tripGetter("ASHB","CIVC")



  })
