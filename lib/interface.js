document.addEventListener("DOMContentLoaded", () => {
  const inpValue = document.querySelector('#input_value');
  const btnInsert = document.querySelector('#btnInsert');
  const lsOutput = document.querySelector('#lsOutput');
  const noteOutput = document.querySelector('#noteOutput');

  btnInsert.addEventListener('click', ()=>{
    //store note

    /*
    noteStorage.create(inpValue.value)();
    location.reload();
    */



    const inpKey = getKey();
    localStorage.setItem(inpKey, inpValue.value);
    location.reload();
  });

  //part of store note
  getKey = () => {
    if (inpValue.value.length < 10) {
      return inpValue.value;
    } else {
      return inpValue.value.slice(0,10);
    }
  };

  //display notes
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    lsOutput.innerHTML += `<a href="#${key}">${key}</a><br>`
  };

  //display selected note
  window.addEventListener('hashchange', () =>{
    let item = location.hash.split("#")[1].replace("%20", " ");
    noteOutput.innerText = localStorage.getItem(item);
  });

});