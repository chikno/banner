var LayerCTRL = (function () {

    LayerCTRL.prototype.selected;

    function LayerCTRL() {
    }

    LayerCTRL.prototype.select = function (layer) {
        this.selected = layer;
    };

    LayerCTRL.prototype.isSelectedDefined = function () {
        return this.selected !== undefined;
    };

    LayerCTRL.prototype.clearSelected = function () {
        this.selected = undefined;
    };
    return LayerCTRL;

})();

