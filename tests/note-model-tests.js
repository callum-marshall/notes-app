function textStoresTheText() {
  var note = new Note("noteText");
  assert.isEqual(note.text, "noteText");
  console.log("textStoresTheText test passed!");
};

function getTextReturnsTheText() {
  var note = new Note("noteText");
  assert.isEqual(note.getText(), "noteText");
  console.log("getTextReturnsTheText test passed!");
};

textStoresTheText();
getTextReturnsTheText();
