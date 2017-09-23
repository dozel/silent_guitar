var Player = function(group, controls, dialogueGroup) {
  Phaser.Sprite.call(this, game, game.world.centerX, game.world.centerY, 'guitarist');
  this.group = group;
  this.controls = controls;
  group.add(this);
  this.physicsEnabled = true;
  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.init();
  this.initDialogue(dialogueGroup);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
Player.prototype.update  = function(){
  this.controls.move(this);
  // if (this. && !this.animating && !gameOver) {
  //   game.physics.arcade.collide(player, walls);
  // }

  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    this.dialogue.start([
      'What the...',
      'Are you ok?',
      'What happened little one?',
      'Can you speak?',
      '...',
      'Alright, I’ll find out what happened.',
    ], this.x + this.width / 2, this.y - this.height / 2);
  }
};
$.extend(Player.prototype, {
  init: function() {
    this.anchor.setTo(0.5, 0.5);
    this.name = 'player';
    this.x = game.world.centerX;
    this.y = game.world.centerY;
    this.smoothed = false;
    this.speed = 300;
    this.body.setSize(60, 21, (this.width - 60) / 2, this.height - 21);
    this.body.collideWorldBounds = true;
    this.setIdle();
  },
  initDialogue: function(dialogueGroup) {
    this.dialogue = new Dialogue(dialogueGroup);
  },
  setRun: function () {
    // this.speed = this.viceToSpeed[this.status];
    // this.footstep.play('',0,0.3,false,false);
    // this.footstep._sound.playbackRate.value = 2.5;
    // if (!this.idle) {
    //     return;
    // }
    // this.idle = false;
    // var type = '';
    // if (this.status !== 'normal') {
    //     type = this.capitalizeFirstLetter(this.status);
    // }
    // this.loadTexture('player1' + type + 'Run');
    // this.animations.add('1' + type + 'Run');
    // this.animations.play('1' + type + 'Run', this.viceToRate[this.status], true);
  },
  setIdle: function() {
    if (this.idle) {
        return;
    }
    this.idle = true;
    this.loadTexture('guitarist');
    this.animations.add('guitaristRun');
    this.animations.play('guitaristRun', 8, true);
  },
});
