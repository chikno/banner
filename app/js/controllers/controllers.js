'use strict';

/* Controllers */

var bannerGeneratorControllers = angular.module('bannerGeneratorControllers', []);


bannerGeneratorApp.controller('rootCtrl', ['$scope', 'Font', 'u', 'ImagesManager', 'templates',
    function ($scope, Font, sizes, ImagesManager, templates) {

        $scope.layerCTRL = new LayerCTRL();
        $scope.linkCTRL = new LinkCTRL();
        $scope.slideCTRL = new SlideCTRL();
        $scope.textCTRL = new TextCTRL();
        $scope.listTemplateCTRL = new ListTemplateCTRL(sizes, templates);
        $scope.imageCTRL = new ImageCTRL();
        $scope.bannerCTRL = new BannerCTRL(sizes);
        $scope.createTemplateCTRL = new CreateTemplateCTRL(Font, ImagesManager);


    }]);