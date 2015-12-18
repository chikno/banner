'use strict';

/* App Module */

var bannerGeneratorApp = angular.module('bannerGeneratorApp', [
    'ngRoute',
    'bannerGeneratorControllers',
    'bannerGeneratorFilters',
    'bannerGeneratorServices',
    'colorpicker.module',
    'ui-rangeSlider',
    'uiSwitch',
    'ui.bootstrap',
    'ngSelect',
    'truncate'
]);

bannerGeneratorApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/listTemplate', {
                    templateUrl: 'partials/list-template.html'
                }).
                when('/createTemplate', {
                    templateUrl: 'partials/create-template.html'
                }).
                otherwise({
                    redirectTo: '/listTemplate'
                });
    }]);
