var BannerCTRL = (function () {

    bannerCTRL.prototype.selected;
    bannerCTRL.prototype.slides = [];
    bannerCTRL.prototype.sizes;
    function bannerCTRL(sizes) {
        this.sizes = sizes;
    }

    bannerCTRL.prototype.addSlide = function () {
        this.slides.push(new Slide());
    };

    bannerCTRL.prototype.removeSlide = function (index) {

        this.slides.splice(index, 1);
    }


    return bannerCTRL;
})();