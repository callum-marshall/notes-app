function getHTMLCreatesHTMLString() {
  var notelists = new NoteList()
  notelists.addNote("teststring")
  notelists.addNote("teststring2")
  var noteListViews = new NoteListView()
  assert.isEqual(noteListViews.getHTML(notelists), "<h2><ul><li><div>teststring</div></li><li><div>teststring2</div></li></ul></h2>")
  console.log("getHTMLCreatesHTMLString");
};

getHTMLCreatesHTMLString();
