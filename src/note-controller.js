(function(exports) {
  function NoteController() {
    this.noteList = new NoteList()
    // this.noteList.addNote("Favourite drink: seltzer")
    this.noteListView = new NoteListView()
  };

  NoteController.prototype = {
    displayNote: function() {
      document.getElementById('app').innerHTML = this.noteListView.getHTML(this.noteList);
    }
  };

  exports.NoteController = NoteController;
})(this);

// var display = new NoteController();
// console.log(display.displayNote());
