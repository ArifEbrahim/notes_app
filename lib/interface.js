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
    lsOutput.innerHTML += `<a href="#${key}">${key}</a><br>`;
  };

  //display selected note
  window.addEventListener('hashchange', () =>{
    let item = location.hash.split("#")[1].replaceAll("%20", " ");
    if (item.length < 20) {item += " "};
    noteOutput.innerText = localStorage.getItem(item);
  });

});