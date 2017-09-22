var Director = function() {
    this.init();
};
Director.prototype.constructor = Director;

$.extend(Director.prototype, {
    init: function () {
      // Hack to load the font
      var label = game.add.text(200, 20, '', {font: "18pt m3x6", fill: 0x1f3442});
      label.alpha = 0.0;

      game.stage.backgroundColor = '#4e1c70';

      this.background = game.add.sprite(0, 0, 'tempBg', {}, world);
      this.background.smoothed = false;

      game.physics.startSystem(Phaser.Physics.ARCADE);

      game.world.setBounds(0, 0, this.background.width, this.background.height);
    },
});
