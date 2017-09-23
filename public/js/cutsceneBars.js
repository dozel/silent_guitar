var CutsceneBars = function(group) {
  this.init(group);
};
CutsceneBars.prototype.constructor = CutsceneBars;

$.extend(CutsceneBars.prototype, {
  init: function(group) {
    this.rectTop = game.add.graphics(0, 0, group);
    this.rectTop.beginFill(0x031520, 1);
    this.rectTop.drawRect(0, 0, game.camera.width, 100);
    this.rectTop.endFill();
    this.rectTop.fixedToCamera = true;

    this.rectBottom = game.add.graphics(0, 0, group);
    this.rectBottom.beginFill(0x031520, 1);
    this.rectBottom.drawRect(0, 0, game.camera.width, 100);
    this.rectBottom.endFill();
    this.rectBottom.fixedToCamera = true;

    this.hide(1);
  },
  show: function() {
    game.add.tween(this.rectTop.cameraOffset).to({ y: 0 }, 1000, Phaser.Easing.Quadratic.Out).start();
    game.add.tween(this.rectBottom.cameraOffset).to({ y: game.camera.height - 100 }, 1000, Phaser.Easing.Quadratic.Out, false).start();
  },
  hide: function(time) {
    if (!time) {
      time = 1000;
    }
    game.add.tween(this.rectTop.cameraOffset).to({ y: -100 }, time, Phaser.Easing.Quadratic.Out).start();
    game.add.tween(this.rectBottom.cameraOffset).to({ y: game.camera.height }, time, Phaser.Easing.Quadratic.Out, false).start();
  },
});
