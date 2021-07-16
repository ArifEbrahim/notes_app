'use strict';

describe('noteStorage', () => {

  it('can store notes in local storage', () =>{
    localStorage.clear();
    let noteStorage = new NoteStorage();
    noteStorage.create("This is a test, this is a test");
    let key = localStorage.key(0);
    let value = localStorage.getItem(key);
    expect(value).toEqual("This is a test, this is a test");
    localStorage.clear();
  });

  it('can delete notes in local storage', () =>{
    localStorage.clear();
    let noteStorage = new NoteStorage();
    localStorage.setItem("1", "Test One");
    location.hash = "#1";
    noteStorage.delete();
    expect(localStorage.length).toEqual(0);
    localStorage.clear();
  });
});
