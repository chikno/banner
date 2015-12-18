var SlideCTRL = (function () {

    slideCTRL.prototype.selected;

    slideCTRL.prototype.layers = [];

    function slideCTRL() {
        this.selected = new Slide();
    }

    slideCTRL.prototype.addLayer = function (layer) {
        this.layers.push(layer);
    };

    slideCTRL.prototype.select = function (slide) {
        this.selected = slide;
    }

    return slideCTRL;
})();