var Director = function() {
    this.init();
    this.initActors();
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
      game.camera.x = (game.world.width - game.camera.width) / 2;
      game.world.setBounds(0, 0, this.background.width, this.background.height);
    },
    initActors: function() {
      this.actors = game.add.group(world);

      this.conrols = new Controls();
      this.player = new Player(this.actors);
      game.camera.follow(this.player);
      this.npc1 = new NPC(this.actors, 0);
      this.npc2 = new NPC(this.actors, 1);
      this.npc3 = new NPC(this.actors, 3);
    },
});
