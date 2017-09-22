var Assets = function() {
    this.init();
};
Assets.prototype.constructor = Assets;

$.extend(Assets.prototype, {
  init: function() {
    this.setupCanvas();
    this.setupFiles();

    Phaser.Canvas.setSmoothingEnabled(game.context, false);
    game.antialias = false;
    game.stage.smoothed = false;
    this.loadImages();
    this.loadSprites();

    // this.loadSFX
    // this.loadMusic
  },
  setupCanvas: function() {
    var canvas = $('canvas');
    var gameDiv = $('.game').addClass('contentCentered');
    var emptyDiv = $('<div>', {'class':'container'});
    emptyDiv.append(canvas);
    gameDiv.append(emptyDiv);
  },
  setupFiles: function() {
    this.images = [
      'tempBg',
    ];
    this.sprites = [
      { name: 'bassist', file: 'bassist_run', width: 32, height: 41, count: 6 },
      { name: 'drummer', file: 'drummer_run', width: 21, height: 34, count: 6 },
      { name: 'guitarist', file: 'guitarist_run', width: 28, height: 42, count: 6 },
      { name: 'synthist', file: 'synth_run', width: 26, height: 39, count: 6 },
    ];
  },
  loadImages: function() {
    for (var i = 0; i < this.images.length; i++) {
      var image = this.images[i];
      game.load.image(image, 'assets/images/' + image + '.png');
    }
  },
  loadSprites: function() {
    for (var i = 0; i < this.sprites.length; i++) {
        var sprite = this.sprites[i];
        game.load.spritesheet(sprite.name, 'assets/sprites/' + sprite.file + '.png', sprite.width, sprite.height, sprite.count);
    }
  },
});
