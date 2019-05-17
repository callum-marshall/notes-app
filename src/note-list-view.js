(function(exports) {
  function NoteListView() {};

  var htmlString = ""

  NoteListView.prototype.getHTML = function(noteListModel) {
    noteListModel.getList()
      .map(function(note) {
        if(note.getText().length > 20) {
          htmlString += `<li><div><a href="${note.id}">${note.getText().substr(0, 20)}...</a></div></li>`
        }else {
          htmlString += `<li><div><a href="${note.id}">${note.getText()}</a></div></li>`
        }
      });
    return `<h2><ul>${htmlString}</ul></h2>`
  };

  exports.NoteListView = NoteListView
})(this);
