var Player = function(group) {
  Phaser.Sprite.call(this, game, game.world.centerX, game.world.centerY, 'guitarist');
  this.group = group;
  group.add(this);
  this.physicsEnabled = true;
  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.init();
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;
Player.prototype.update  = function(){
  this.move();
  // if (this. && !this.animating && !gameOver) {
  //   game.physics.arcade.collide(player, walls);
  // }
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
  move: function() {
    if (cursors.up.isDown || game.input.keyboard.isDown(Phaser.Keyboard.W)) {
      // player.setRun();
      this.body.velocity.y = -1 * this.speed;
      this.group.sort('bottom', Phaser.Group.SORT_ASCENDING);
    }
    else if (cursors.down.isDown || game.input.keyboard.isDown(Phaser.Keyboard.S)) {
      // player.setRun();
      this.body.velocity.y = this.speed;
      this.group.sort('bottom', Phaser.Group.SORT_ASCENDING);
    }
    else {
      this.body.velocity.y = 0;
      if (this.body.velocity.x === 0) {
        // player.setIdle();
      }
    }

    if (cursors.left.isDown || game.input.keyboard.isDown(Phaser.Keyboard.A)) {
      // player.setRun();
      this.scale.x = -1;
      this.body.velocity.x = -1 * this.speed;
      this.group.sort('bottom', Phaser.Group.SORT_ASCENDING);
    }
    else if (cursors.right.isDown || game.input.keyboard.isDown(Phaser.Keyboard.D)) {
      // player.setRun();
      this.scale.x = 1;
      this.body.velocity.x = this.speed;
      this.group.sort('bottom', Phaser.Group.SORT_ASCENDING);
    }
    else {
      this.body.velocity.x = 0;
      if (this.body.velocity.y === 0) {
        // player.setIdle();
      }
    }
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
