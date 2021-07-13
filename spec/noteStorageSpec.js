describe('noteStorage', () => {

  it('can store the input element', () =>{

    let element = "element double"
    noteStorage = new NoteStorage(element);
    expect(noteStorage.element).toBeTruthy();
  })


});