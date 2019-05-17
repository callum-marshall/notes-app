(function(exports) {
  function NoteList() {
    this.list = [];
  };

NoteList.prototype.setId = function (note) {
  note.id = this.list.indexOf(note)
};

NoteList.prototype.getList = function () {
  return this.list
};

NoteList.prototype.addNote = function (noteText) {
  note = new Note(noteText)
  this.list.push(note)
  this.setId(note)
};

  exports.NoteList = NoteList;
})(this);
