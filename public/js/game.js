
var world;

var state = {
    preload: function() {
      console.log('preload');
      world = game.add.group();
    },
    create: function() {
      console.log('create');
    },
};

var game = new Phaser.Game(900, 480, Phaser.CANVAS, '', state);
