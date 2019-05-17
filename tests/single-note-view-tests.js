(function(exports) {
  function testSingleView() {
    var note = new Note("Favourite drink: seltzer");
    var singleNote = new SingleNoteView(note)

    assert.isTrue(singleNote.show() === `<div> ${note.getText()} </div>`)
    console.log("testSingleView test passed!");
  };

    testSingleView();
})(this);
