(function(exports) {
  function NoteListView() {};

  var htmlString = ""

  NoteListView.prototype.getHTML = function(noteListModel) {
    noteListModel.getList()
      .map(function(note) {

        htmlString += `<li><div>${note.getText()}</div></li>`
        
      });
    return `<h2><ul>${htmlString}</ul></h2>`
  };

  exports.NoteListView = NoteListView
})(this);
