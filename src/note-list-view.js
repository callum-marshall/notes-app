(function(exports) {
  function NoteListView() {};

  var htmlString = ""
  NoteListView.prototype.getHTML = function(noteListModel) {
    noteListModel.getList()
    .map(function(note) {
      htmlString = htmlString + `<li><div>${note.getText()}</div></li>`
    });
    return "<ul>" + htmlString + "</ul>"
  };

  exports.NoteListView = NoteListView
})(this);
