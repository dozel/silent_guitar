var Controls = function() {
    this.init();
};
Controls.prototype.constructor = Controls;

$.extend(Controls.prototype, {
    init: function() {
      cursors = game.input.keyboard.createCursorKeys();
    },
});
