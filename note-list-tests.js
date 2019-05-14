// function textStoresTheText() {
//   var note = new Note("noteText");
//   assert.isEqual(note.text, "noteText");
// };
//
// function getTextReturnsTheText() {
//   var note = new Note("noteText");
//   assert.isEqual(note.getText(), "noteText");
// };
//
// textStoresTheText();
// getTextReturnsTheText();

function listIsAnArray() {
  var noteList = new NoteList();
  assert.isAnArray(noteList.list);
};

function listStartsEmpty() {
  var noteList = new NoteList();
  assert.isEmpty(noteList.list);
};

listIsAnArray();
listStartsEmpty(); 
