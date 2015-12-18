bannerGeneratorApp.factory('Font', function () {
    var listPolices = [
        {name: 'Arial,sans-serif'},
        {name: 'Impact'},
        {name: 'Helvetica'},
        {name: 'Federo'},
        {name: 'FuturaLight'}
    ];
    var factory = {};
    factory.getFonts = function () {
        return listPolices;
    };
    return factory;
});

bannerGeneratorApp.factory('ImagesManager', function () {

    var listImages = [
        {url: 'http://dev05.orbit-interactive.fr/cdn-orbit/angularjs/modules/img/img1.jpg', title: 'Image 1', position: {x: '0', y: '0'}},
        {url: 'http://dev05.orbit-interactive.fr/cdn-orbit/angularjs/modules/img/img2.jpg', title: 'Image 2', position: {x: '0', y: '0'}},
        {url: 'http://dev05.orbit-interactive.fr/cdn-orbit/angularjs/modules/img/img3.jpg', title: 'Image 3', position: {x: '0', y: '0'}},
        {url: 'http://dev05.orbit-interactive.fr/cdn-orbit/angularjs/modules/img/img4.jpg', title: 'Image 4', position: {x: '0', y: '0'}},
        {url: 'http://dev05.orbit-interactive.fr/cdn-orbit/angularjs/modules/img/img5.jpg', title: 'Image 5', position: {x: '0', y: '0'}},
        {url: 'http://dev05.orbit-interactive.fr/cdn-orbit/angularjs/modules/img/img6.jpg', title: 'Image 6', position: {x: '0', y: '0'}}
    ];
    var factory = {};
    factory.getListImages = function () {
        return listImages;
    };
    return factory;
});