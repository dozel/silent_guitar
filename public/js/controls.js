var Controls = function() {
  this.init();
};
Controls.prototype.constructor = Controls;

$.extend(Controls.prototype, {
  init: function() {
    this.status = 'moveIt';
    cursors = game.input.keyboard.createCursorKeys();
  },
  pause: function() {

  },
  isPlayerClose: function() {
    var playerClose = false;
    for (var i = 0; i < npcs.length; i++) {
      var npc = npcs[i];
      var distance = game.math.distance(npc.x, npc.y, player.x, player.y);
      if (distance < 150) {
        convoNPC = npc;
        npc.showTalkIcon();
        return true;
      }
    }
    for (var i = 0; i < npcs.length; i++) {
      var npc = npcs[i];
      npc.clearTalkIcon();
    }
    convoNPC = null;
    return playerClose;
  },
  update: function() {
    this.move(player);
    var playerClose = this.isPlayerClose(player);
    if (playerClose && game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      director.converse();
    }
  },
  move: function() {
    if (this.status === 'moveIt') {
      if (cursors.up.isDown || game.input.keyboard.isDown(Phaser.Keyboard.W)) {
        // player.setRun();
        player.body.velocity.y = -1 * player.speed;
        player.group.sort('bottom', Phaser.Group.SORT_ASCENDING);
      }
      else if (cursors.down.isDown || game.input.keyboard.isDown(Phaser.Keyboard.S)) {
        // player.setRun();
        player.body.velocity.y = player.speed;
        player.group.sort('bottom', Phaser.Group.SORT_ASCENDING);
      }
      else {
        player.body.velocity.y = 0;
        if (player.body.velocity.x === 0) {
          // player.setIdle();
        }
      }

      if (cursors.left.isDown || game.input.keyboard.isDown(Phaser.Keyboard.A)) {
        // player.setRun();
        player.scale.x = -1;
        player.body.velocity.x = -1 * player.speed;
        player.group.sort('bottom', Phaser.Group.SORT_ASCENDING);
      }
      else if (cursors.right.isDown || game.input.keyboard.isDown(Phaser.Keyboard.D)) {
        // player.setRun();
        player.scale.x = 1;
        player.body.velocity.x = player.speed;
        player.group.sort('bottom', Phaser.Group.SORT_ASCENDING);
      }
      else {
        player.body.velocity.x = 0;
        if (player.body.velocity.y === 0) {
          // player.setIdle();
        }
      }
    }
  },
});
