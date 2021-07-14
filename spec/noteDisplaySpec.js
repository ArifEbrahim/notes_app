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

});
