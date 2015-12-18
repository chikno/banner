var ImageCTRL = (function () {
    ImageCTRL.prototype.selected;
    ImageCTRL.prototype.list = [];
    function ImageCTRL() {
    }

    ImageCTRL.prototype.addToList = function (image) {
        this.list.push(image);
    };

    ImageCTRL.prototype.select = function (image) {
        this.selected = image;
    };

    ImageCTRL.prototype.addToList = function (image) {
        this.list.push(image);
    };

    ImageCTRL.prototype.clearList = function () {
        this.list = [];
    };

    ImageCTRL.prototype.isInList = function (image) {
        return this.list.indexOf(image) !== -1;
    };

    return ImageCTRL;
})();
