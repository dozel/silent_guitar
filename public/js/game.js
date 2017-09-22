
var world, director, assets;

var state = {
    preload: function() {
      console.log('preload');
      world = game.add.group();
      assets = new Assets();
    },
    create: function() {
      console.log('create');
      director = new Director();
    },
};

var game = new Phaser.Game(900, 480, Phaser.CANVAS, '', state);
