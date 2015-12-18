var Layer = (function () {
    Layer.prototype.zIndex;
    function Layer() {
    }
    Layer.prototype.isText = function () {
        return this instanceof Text;
    };
    Layer.prototype.isImage = function () {
        return this instanceof Image;
    };
    Layer.prototype.isLink = function () {
        return this instanceof Link;
    };
    return Layer;
})();

var Image = (function () {
    Image.prototype.size;
    Image.prototype.position;
    Image.prototype.title;
    Image.prototype.url;
    function Image() {
    }
    Image.prototype.isText = function () {
        return this instanceof Text;
    };
    Image.prototype.isImage = function () {
        return this instanceof Image;
    };
    Image.prototype.isLink = function () {
        return this instanceof Link;
    };
    return Image;
})();

var Text = (function () {
    Text.prototype.template;
    Text.prototype.value;
    Text.prototype.isBgTrue;
    Text.prototype.fontFamily;
    Text.prototype.backgroundColor;
    Text.prototype.color;
    Text.prototype.fontSize;
    Text.prototype.paddingLeftRight;
    Text.prototype.paddingTopBottom;
    Text.prototype.isBold;
    Text.prototype.isItalic;
    Text.prototype.isUnderlined;
    function Text() {
    }
    Text.prototype.isText = function () {
        return this instanceof Text;
    };
    Text.prototype.isImage = function () {
        return this instanceof Image;
    };
    Text.prototype.isLink = function () {
        return this instanceof Link;
    };
    return Text;
})();
var Link = (function () {
    Link.prototype.texte;
    Link.prototype.url;
    Link.prototype.color;
    Link.prototype.align;
    Link.prototype.background;
    Link.prototype.template;
    function Link() {
    }
    Link.prototype.isText = function () {
        return this instanceof Text;
    };
    Link.prototype.isImage = function () {
        return this instanceof Image;
    };
    Link.prototype.isLink = function () {
        return this instanceof Link;
    };
    return Link;
})();