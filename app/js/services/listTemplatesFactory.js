bannerGeneratorApp.factory('sizes', function () {
    var listSizes = [
        {id: 1, width: '300', height: '250'},
        {id: 2, width: '300', height: '600'},
        {id: 3, width: '728', height: '90'},
        {id: 4, width: '600', height: '300'}

    ];
    var factory = {};
    factory.getSizes = function () {
        return listSizes;
    };
    return factory;
});

bannerGeneratorApp.factory('templates', function () {
    var listTemplates = [
        {id: 1, width: '300', height: '250', background: '#cecece', textColor: '#fff'},
        {id: 2, width: '300', height: '600', background: '#000', textColor: '#fff'},
        {id: 3, width: '728', height: '90', background: 'red', textColor: '#fff'},
        {id: 4, width: '250', height: '9100', background: '#fff', textColor: '#000'},
        {id: 5, width: '300', height: '250', background: 'green', textColor: '#fff'},
        {id: 6, width: '300', height: '600', background: 'blue', textColor: '#fff'},
        {id: 7, width: '728', height: '90', background: '#000', textColor: '#fff'},
        {id: 8, width: '250', height: '9100', background: 'red', textColor: '#000'}
    ];
    var factory = {};
    factory.getlistTemplates = function () {
        return listTemplates;
    };
    return factory;
});