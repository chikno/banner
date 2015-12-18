var Slide = (function () {

    Slide.prototype.isBgTrue;
    Slide.prototype.isBgTrue;
    Slide.prototype.isBorderTrue;
    Slide.prototype.backgroundColor;
    Slide.prototype.borderColor;
    Slide.prototype.borderWidth;
    Slide.prototype.borderStyle;
    Slide.prototype.backgroundColor;
    Slide.prototype.layers = [];

    function Slide() {
    }

    Slide.prototype.addLayer = function (layer) {
        this.layers.push(layer);
    };

    Slide.prototype.addLayers = function (layers) {
        this.layers = this.layers.concat(layers);
    };

    Slide.prototype.addText = function (text) {
        this.addLayer(text);
    };

    Slide.prototype.isInList = function (image) {
        return this.layers.indexOf(image) !== -1;
    };

    return Slide;
})();