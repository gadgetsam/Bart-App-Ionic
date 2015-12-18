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
    $http.get('http://api.bart.gov/api/etd.aspx?cmd=etd&orig=12th&key=MW9S-E7SL-26DU-VV8V').then(function(string) {
      console.log('Success', string);
      console.log(xmlParser.xml_str2json(string.data));
      // For JSON responses, resp.data contains the result
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })
  })

