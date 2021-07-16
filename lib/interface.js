'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const inpValue = document.querySelector('#input_value');
  const btnInsert = document.querySelector('#btnInsert');
  const lsOutput = document.querySelector('#lsOutput');
  const noteOutput = document.querySelector('#noteOutput');
  const btnDelete = document.querySelector('#btnDelete');
  const noteStorage = new NoteStorage();
  const noteDisplay = new NoteDisplay();
  const emojify = new Emojify();

  noteDisplay.all(lsOutput);

  btnInsert.addEventListener('click', ()=>{
    if((inpValue.value)) {
      emojify.convert(inpValue.value)
      .then(data => {
        noteStorage.create(data);
        location.reload();
      });
    };
    });

  window.addEventListener('hashchange', () =>{
    noteDisplay.show(noteOutput);
  });

  btnDelete.addEventListener("click", () => { 
    noteStorage.delete()
    location.reload();
  });

});

