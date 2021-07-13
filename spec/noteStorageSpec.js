describe('noteStorage', () => {

  it('can store notes in local storage', () =>{
    noteStorage = new NoteStorage();
    noteStorage.create("This is a test, this is a test");
    let value = localStorage.getItem("This is a test, this");
    expect(value).toEqual("This is a test, this is a test");
  });

  it('can create text keys', () => {
    noteStorage = new NoteStorage();
    let testText = noteStorage.getKey("HelloWorldHelloWorld12345")
    expect(testText).toEqual('HelloWorldHelloWorld')
  });

});
