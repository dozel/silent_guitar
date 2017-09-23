var PADDING = 50;
var Dialogue = function(group, color) {
  this.init(group, color);
};
Dialogue.prototype.constructor = Dialogue;

$.extend(Dialogue.prototype, {
  init: function(group, color) {
    this.rectangle = game.add.graphics(0, 0, group);
    this.rectangle.beginFill(color, 1);
    this.rectangle.drawRect(0, 0, PADDING, PADDING / 2);
    this.rectangle.endFill();
    this.rectangle.alpha = 0;

    this.style = { font: '24pt m3x6', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 350 };
    this.textbox = game.add.text(this.rectangle.x, this.rectangle.y, '', this.style);
    this.textbox.lineSpacing = -20;
    this.textbox.alpha = 0;
    group.add(this.textbox);
  },
  start: function(lines, cornerX, cornerY) {
    console.log('started:', lines);
    this.lines = lines;
    var firstLine = this.lines[0];
    this.currentLine = 0;

    this.rectangle.x = cornerX - PADDING / 4;
    this.rectangle.y = cornerY - PADDING / 2;

    this.textbox.x = this.rectangle.x + PADDING / 4;
    this.textbox.y = this.rectangle.y;

    this.change(firstLine);
  },
  change: function(line) {
    if (this.currentLine < this.lines.length - 1) {
      this.currentLine += 1;
      if (!line) {
        line = this.lines[this.currentLine];
      }
      this.changeToLine(line);
    } else if (line && this.currentLine === 0 && this.lines.length === 1) {
      this.currentLine += 1;
      this.changeToLine(line);
    } else { // disappear - last line
      this.disappear();
    }
  },
  changeToLine: function(line) {
    this.firstTween = false;
    this.secondTween = false;
    this.thirdTween = false;
    var tweenFadeOut = game.add.tween(this.textbox).to({ alpha: 0 }, 500, Phaser.Easing.Quadratic.Out, false).start();
    tweenFadeOut.onComplete.addOnce(function() {
      if (this.firstTween) {
        return;
      }
      this.firstTween = true;
      this.textbox.text = line;

      this.newWidth = Math.max(this.lineToWidth(line), 100);
      console.log(this.newWidth);
      this.style.wordWrapWidth = this.newWidth;
      this.textbox.setStyle(this.style);

      var newHeight = this.textbox.height;
      var tweenRect = game.add.tween(this.rectangle).to({
        width: this.newWidth,
        height: newHeight,
        alpha: 1
      }, 1000, Phaser.Easing.Quadratic.Out, true);
      tweenRect.onComplete.addOnce(function() {
        if (this.secondTween) {
          return;
        }
        this.firstTween = true;
        var tweenFadeIn = game.add.tween(this.textbox).to( { alpha: 1 }, 1000, Phaser.Easing.Quadratic.Out, true);
        tweenFadeIn.onComplete.addOnce(function() {
          if (this.thirdTween) {
            return;
          }
          this.firstTween = true;
          setTimeout(function() {
            this.change();
          }.bind(this), this.lineInterval(line));
        }.bind(this));
      }.bind(this));
    }.bind(this));
  },
  disappear: function() {
    var tweenFadeOut = game.add.tween(this.textbox).to( { alpha: 0 }, 1000, Phaser.Easing.Quadratic.Out, true);
    tweenFadeOut.onComplete.addOnce(function() {
      $(this).trigger({ type: 'dialogueEnded' });
      var tweenRect = game.add.tween(this.rectangle).to({
        width: PADDING,
        alpha: 0
      }, 1000, Phaser.Easing.Quadratic.Out, true);
    }.bind(this));
  },
  lineInterval: function(line) { // average: 200 words per minute (60 seconds)
    var interval = 1000 * (line.split('').length * 60) / 500;
    console.log('Interval:', interval);
    return interval;
  },
  lineToWidth: function(line) {
    var lineWithoutSpaces = line.replace(' ', '');
    var newWidth = 10 * lineWithoutSpaces.length; // 200    180-220
    if (newWidth < this.newWidth + 20 && newWidth > this.newWidth - 20) {
      if (newWidth < this.newWidth) {
        return this.newWidth - 50;
      }
      return this.newWidth + 50;
    } else if (newWidth > 350) {
      return 250;
    } else if (newWidth > 250) {
      return 200;
    } else if (newWidth > 200) {
      return 150;
    }
    return 10 * lineWithoutSpaces.length;
  },
});
