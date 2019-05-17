function listIsAnArray() {
  var noteList = new NoteList();
  assert.isAnArray(noteList.list);
  console.log("listIsAnArray test passed!");
};

function listStartsEmpty() {
  var noteList = new NoteList();
  assert.isEmpty(noteList.list);
  console.log("listStartsEmpty test passed!");
};

function getListReturnsList() {
  var noteList = new NoteList();
  noteList.list = "teststring"
  assert.isEqual(noteList.getList(), "teststring");
  console.log("getListReturnsList test passed!");
};

function addNoteCreatesANoteAndStoresIt() {
  var noteList = new NoteList();
  noteList.addNote("teststring")
  assert.isEqual(noteList.list[0].getText(), "teststring");
  console.log("addNoteCreatesANoteAndStoresIt test passed!");
};

listIsAnArray();
listStartsEmpty();
getListReturnsList();
addNoteCreatesANoteAndStoresIt();
