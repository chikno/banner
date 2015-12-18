'use strict';

/* Directives */
bannerGeneratorApp.directive('dragable', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attr) {
            $(elem).draggable({containment: "#slider", scroll: false});
        }
    }
});

bannerGeneratorApp.directive('resizable', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attr) {
            $(elem).resizable();
            $(elem).parent('div').resize(function () {
                $(this).css('height', $('#slider').height() + 'px');
                $(this).css('width', $('#slider').width() + 'px');
            });
        }
    }
});


