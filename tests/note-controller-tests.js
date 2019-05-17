(function(exports) {

  function testController() {
    var controller = new NoteController();

    assert.isTrue(controller !== undefined);
    console.log("testController test passed!");
  };

    testController();
})(this);
