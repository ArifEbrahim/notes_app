'use strict';

describe('noteDisplay', () => {

  it('can create a list of stored notes', () => {
    localStorage.clear();
    localStorage.setItem("1", "Test One");
    let noteDisplay = new NoteDisplay();
    let element = document.querySelector('#test-lsOutput');
    let key = localStorage.key(0);
  
    noteDisplay.all(element);
    expect(element.innerHTML).toEqual(`<a href="#${key}">Test One</a><br>`);
    localStorage.clear();
  });

  it('can display a selected note', () => {
    localStorage.clear();
    localStorage.setItem("1", "Test One");
    let noteDisplay = new NoteDisplay();
    let element = document.querySelector('#test-noteOutput');
    location.hash = "#1";

    noteDisplay.show(element);
    expect(element.innerText).toEqual("Test One");
  });

});
