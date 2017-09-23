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
      this.dialogues = game.add.group(world);

      this.npc1 = new NPC(this.actors, 0, { x: 900 * 2, y: 200 * 2 });
      this.npc2 = new NPC(this.actors, 1, { x: 1400 * 2, y: 190 * 2 });
      this.npc3 = new NPC(this.actors, 3, { x: 1800 * 2, y: 360 * 2 });

      this.controls = new Controls([this.npc1, this.npc2, this.npc3]);
      this.player = new Player(this.actors, this.controls, this.dialogues);
      game.camera.follow(this.player);
    },
});
