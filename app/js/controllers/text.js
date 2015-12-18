var TextCTRL = (function () {
    TextCTRL.prototype.selected;

    function TextCTRL() {
    }
    TextCTRL.prototype.createText = function () {
        this.selected = new Text();
        return this.selected;
    };

    TextCTRL.prototype.select = function (text) {
        this.selected = text;
    };


    TextCTRL.makeBold = function () {
        alert('text');
    }

    return TextCTRL;
})();
