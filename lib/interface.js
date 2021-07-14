'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const inpValue = document.querySelector('#input_value');
  const btnInsert = document.querySelector('#btnInsert');
  const lsOutput = document.querySelector('#lsOutput');
  const noteOutput = document.querySelector('#noteOutput');
  const noteStorage = new NoteStorage();
  const noteDisplay = new NoteDisplay();

  btnInsert.addEventListener('click', ()=>{
    fetch("https://makers-emojify.herokuapp.com/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"text":inpValue.value})  
      }).then(response => {
      response.json().then(json => {

        noteStorage.create(json.emojified_text);
        location.reload();

      });
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