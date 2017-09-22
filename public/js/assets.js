var Assets = function() {
    this.init();
};
Assets.prototype.constructor = Assets;

$.extend(Assets.prototype, {
    init: function () {
        this.setupCanvas();
        this.loadImages();
        // this.loadSprites
        // this.loadSFX
        // this.loadMusic
    },
    setupCanvas: function () {
        var canvas = $('canvas');
        var gameDiv = $('.game').addClass('contentCentered');
        var emptyDiv = $('<div>', {'class':'container'});
        emptyDiv.append(canvas);
        gameDiv.append(emptyDiv);
    },
    loadImages: function() {
        Phaser.Canvas.setSmoothingEnabled(game.context, false);
        game.antialias = false;
        game.stage.smoothed = false;
        game.load.image('tempBg', 'assets/sprites/tempBg.png');
    },
});
