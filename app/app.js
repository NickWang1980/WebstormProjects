// Declare app level module which depends on views, and components
var webStorm = angular.module('webStorm', ['ngRoute', 'webStorm.view1', 'webStorm.view2', 'webStorm.version', 'ngMessages']
).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}]);

webStorm.controller("webStormCtrl", function($scope, $log){

        $scope.people = [
            {firstName: "Nick", lastName: "FRANCK"}
        ];

        $scope.showPerson = function (person) {
            $log.warn(person);
        };

        // -- Site header
        $scope.brandTitle="woosacase incubator";
        // -- site Top navBar
        $scope.topNavBarItems = [
            {name: "My UI Modules", routing: "#/view1", active: true, dropdown: false},
            {name: "My DB Modules", routing: "#/view2", active: false, dropdown: false},
        ];


    }
)

