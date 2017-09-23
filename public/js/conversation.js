var Conversation = function() {
  this.init();
};
Conversation.prototype.constructor = Conversation;

$.extend(Conversation.prototype, {
  init: function() {
    var dialogues = this.randomDialogue();
    this.conversation = [];
    for (var i = 0; i < dialogues.length; i++) {
      this.conversation.push({
        dialogue: [dialogues[i]], //TODO: Make this smarter and bunch together nearby same from dialogues
        from: Math.floor(Math.random() * 2) === 0 ?  'player' : 'npc',
      });
    }
    this.converseIndex = 0;
    this.converse();
  },
  converse: function() {
    if (this.converseIndex >= this.conversation.length) {
      $(this).trigger({ type: 'convoEnded' });
      return;
    }
    var converse = this.conversation[this.converseIndex];
    var talker = converse.from === 'player' ? player : convoNPC;
    talker.dialogue.start(converse.dialogue, talker.x + talker.width / 2, talker.y - talker.height / 2);
    $(talker.dialogue).on('dialogueEnded', function () {
      this.converseIndex++;
      $(talker.dialogue).off('dialogueEnded');
      this.converse();
    }.bind(this));
  },
  randomDialogue: function() {
    var dialogues = [];
    var count = Math.max(Math.floor(Math.random() * 10), 1);
    for (var i = 0; i < count; i++) {
      var wordCount = Math.floor(Math.random() * 10);
      var dialogue = '';
      for (var j = 0; j < wordCount; j++) {
        var randomLength = Math.floor(Math.random() * 12);
        dialogue += Math.random().toString(36).slice(13 - randomLength)
        dialogue += ' ';
      }
      dialogues.push(dialogue);
    }
    return dialogues;
  },
});
