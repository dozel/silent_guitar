var NPC = function(group, npcIndex) {
  this.npcIndex = npcIndex;
  this.spriteName = assets.sprites[this.npcIndex].name;
  Phaser.Sprite.call(this, game, game.world.centerX + Math.floor(Math.random() * 400), game.world.centerY - Math.floor(Math.random() * 200), this.spriteName);
  this.group = group;
  group.add(this);
  game.physics.enable(this, Phaser.Physics.ARCADE);
  this.init();
};
NPC.prototype = Object.create(Phaser.Sprite.prototype);
NPC.prototype.constructor = NPC;
NPC.prototype.update  = function(){
  // if (game.started && !player.spilling) {
  //   game.physics.arcade.collide(this, walls);
  //   actors.sort('bottom', Phaser.Group.SORT_ASCENDING);
  //   var distance = this.game.math.distance(this.x, this.y, player.x, player.y);
  //   this.playerClose = (distance < FAN_DISTANCE);
  // }
};
$.extend(NPC.prototype, {
  init: function() {
    this.anchor.setTo(0.5, 0.5);
    this.name = this.spriteName;
    this.smoothed = false;
    // this.inputEnabled = true;
    // this.events.onInputOver.add(this.mouseOver, this);
    // this.events.onInputOut.add(this.mouseOut, this);
    // this.events.onInputDown.add(this.mouseDown, this);

    this.body.setSize(60, 21, (this.width - 60) / 2, this.height - 21);
    this.body.collideWorldBounds = true;
    this.setIdle();
  },
  setIdle: function() {
    if (this.idle) {
        return;
    }
    this.idle = true;
    this.loadTexture(this.spriteName);
    this.animations.add(this.spriteName + 'Run');
    this.animations.play(this.spriteName + 'Run', 8, true);
  },
  // setRun: function () {
  //     if (!this.moving) {
  //         this.loadTexture(this.name);
  //         this.animations.add(this.name);
  //         this.animations.play(this.name, 8, true);
  //         this.moving = true;
  //     }
  // },
  // moveTo: function (x, y, speed) {
  //     this.setRun();
  //     var toX = x, toY = y;
  //     if (x < this.x) {
  //         this.scale.x = -1;
  //     }
  //     else {
  //         this.scale.x = 1;
  //     }
  //
  //     var changing = this.changingArea(x);
  //
  //     if (changing) {
  //         var border;
  //         if (x < this.x) {
  //             this.area--;
  //             border = borders[this.area];
  //         }
  //         else {
  //             border = borders[this.area];
  //             this.area++;
  //         }
  //         if (!border) {
  //             //console.log('NO BORDER PANIC WTF DAAAAMMNN');
  //             return;
  //         }
  //
  //         toX = border.x;
  //         toY = border.y;
  //         this.moveTimeout = setTimeout(function () {
  //             this.moveTo(x, y, speed);
  //         }.bind(this, x, y, speed), (game.math.distance(this.x, this.y, toX, toY) / speed) * 1000);
  //     }
  //     else {
  //         // This makes sure the fan doesn't land on the same position as another fan
  //         this.extraTimeout = setTimeout(function () {
  //             var posModified = false;
  //             var destinationArea = areas[this.area];
  //             var newToX = toX, newToY = toY;
  //             for (var key in destinationArea) {
  //                 if (key !== 'x' && key !== 'y' && key !== 'width' && key !== 'height' && key !== this.name) {
  //                     var fan = destinationArea[key];
  //                     if (this.nearby({x: newToX, y: newToY}, {x: fan.x, y: fan.y}, 10)) {
  //                         newToX += (Math.floor(Math.random() * 2) === 0 ? -1 : 1) * Math.random() * 20;
  //                         newToY += (Math.floor(Math.random() * 2) === 0 ? -1 : 1) * Math.random() * 20;
  //                         posModified = true;
  //                     }
  //                     if (this.nearby({x: 0, y: newToY}, {x: 0, y: fan.y}, 10)) {
  //                         newToY += (Math.floor(Math.random() * 2) === 0 ? -1 : 1) * Math.random() * 20;
  //                         posModified = true;
  //                     }
  //                 }
  //             }
  //             if (posModified) {
  //                 var rotation = game.math.angleBetween(this.x, this.y, newToX, newToY);
  //                 this.body.velocity.x = Math.cos(rotation) * speed;
  //                 this.body.velocity.y = Math.sin(rotation) * speed;
  //             }
  //         }.bind(this, toX, toY), (game.math.distance(this.x, this.y, toX, toY) / speed) * 1000);
  //         this.clearJustInCase = setTimeout(function () {
  //             if (this.moving) {
  //                 this.meet();
  //             }
  //         }.bind(this), 20000);
  //     }
  //     var rotation = game.math.angleBetween(this.x, this.y, toX, toY);
  //     this.body.velocity.x = Math.cos(rotation) * speed;
  //     this.body.velocity.y = Math.sin(rotation) * speed;
  //     this.mouseOut();
  // },
  mouseOver: function (target) {
      // this.tint = colorBlack;
      // game.canvas.style.cursor = 'url(./assets/imgs/info.png),auto';
  },
  mouseOut: function () {
    // this.tint = 0xffffff;
  },
  mouseDown: function () {
    // this.mouseOut();
    // game.canvas.style.cursor = 'url(./assets/imgs/normal.png),auto';
  },
});
