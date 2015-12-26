/**
 * Created by curos on 26/12/15.
 */
var zoomchat = angular.module("6Way", ["firebase"]);

zoomchat.controller('6WayController', function($scope, $firebaseObject) {
        $scope.theHeading = "";
        var ref = new Firebase("https://6way.firebaseio.com/theHeading/");
        $firebaseObject(ref).$bindTo($scope, "theHeading");
    });
