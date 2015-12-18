var CreateTemplateCTRL = (function () {


    createTemplateCTRL.prototype.isSelectingImage;
    createTemplateCTRL.prototype.font;
    createTemplateCTRL.prototype.images;
    createTemplateCTRL.prototype.listImages;
    createTemplateCTRL.prototype.showBannerSettings = true;
    createTemplateCTRL.prototype.showTextSettings = false;
    createTemplateCTRL.prototype.fontSize = {
        min: 20,
        max: 100
    };
    function createTemplateCTRL(font,images) {
        this.font = font;
        this.images = images;
   
    }
    createTemplateCTRL.prototype.openImageSelection = function () {
        this.isSelectingImage = true;
    };
    createTemplateCTRL.prototype.closeImageSelection = function () {
        this.isSelectingImage = false;
    };
    
    


    return createTemplateCTRL;
})();