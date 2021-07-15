'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const inpValue = document.querySelector('#input_value');
  const btnInsert = document.querySelector('#btnInsert');
  const lsOutput = document.querySelector('#lsOutput');
  const noteOutput = document.querySelector('#noteOutput');
  const noteStorage = new NoteStorage();
  const noteDisplay = new NoteDisplay();
  const emojify = new Emojify();

  btnInsert.addEventListener('click', ()=>{
      let response = emojify.convert(inpValue.value);
      response.then(data => {
        noteStorage.create(data);
        location.reload();
      });
    });

  //display notes
  noteDisplay.all(lsOutput);

  //display selected note
  window.addEventListener('hashchange', () =>{
    let item = location.hash.split("#")[1];
    noteOutput.innerText = localStorage.getItem(item);
  });

});