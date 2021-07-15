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


  window.addEventListener('hashchange', () =>{
    let item = location.hash.split("#")[1];
    noteOutput.innerText = localStorage.getItem(item);
  });




  // const rotate = () => { 
  //    var random_degree = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)", "rotate(-10deg)"];  
  //    return random_degree[Math.floor(Math.random() * random_degree.length)];
  // }

  // const color = () => { 
  //    var random_colors = ["#C2FF3D","#FF3DE8","#3DC2FF","#04E022","#BC83E6","#EBB328"]; 
  //    if(i > random_colors.length - 1){    i = 0;  }  return random_colors[i++];
  // }

  // document.getElementById("noteOutput").addEventListener("click", () => {  
  //   localStorage.clear();
  //   notes.innerHTML = '';
  //   contentArray = [];
  // });


  // document.getElementById("noteOutput").addEventListener("click", () => {  
  //   localStorage.clear();
  // });




});

