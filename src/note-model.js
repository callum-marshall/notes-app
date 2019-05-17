(function(exports) {
  function Note(noteText) {
    this.text = noteText;
    this.id = 0
  };

  Note.prototype.getText = function () {
    return this.text
  };

  exports.Note = Note;
})(this);
