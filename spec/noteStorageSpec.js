describe('noteStorage', () => {

  it('can store notes in local storage', () =>{
    noteStorage = new NoteStorage();
    localStorage.clear();
    noteStorage.create("This is a test, this is a test");
    key = localStorage.key(0)
    let value = localStorage.getItem(key)
    expect(value).toEqual("This is a test, this is a test");
  });

});
