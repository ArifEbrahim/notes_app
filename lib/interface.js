document.addEventListener("DOMContentLoaded", () => {
  const inpValue = document.querySelector('#input_value');
  const btnInsert = document.querySelector('#btnInsert');
  const lsOutput = document.querySelector('#lsOutput');
  const noteOutput = document.querySelector('#noteOutput');
  const noteStorage = new NoteStorage();

  btnInsert.addEventListener('click', ()=>{
    noteStorage.create(inpValue.value);
    location.reload();
  });

  //display notes
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    let displayValue;
    if (value.length <= 20) {
      displayValue = value;
    } else {
      displayValue = value.slice(0,19);
    }
    lsOutput.innerHTML += `<a href="#${key}">${displayValue}</a><br>`;
  };

  //display selected note
  window.addEventListener('hashchange', () =>{
    let item = location.hash.split("#")[1];
    noteOutput.innerText = localStorage.getItem(item);
  });

});