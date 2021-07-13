document.addEventListener("DOMContentLoaded", () => {
  const inpValue = document.querySelector('#input_value');
  const btnInsert = document.querySelector('#btnInsert');
  const lsOutput = document.querySelector('#lsOutput');
  const noteOutput = document.querySelector('#noteOutput');

  btnInsert.addEventListener('click', ()=>{
    const inpKey = getKey();
    localStorage.setItem(inpKey, inpValue.value);
    location.reload();
  });

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      lsOutput.innerHTML += `<a href="#${key}">${key}</a><br>`
    }

    getKey = () => {
      if (inpValue.value.length < 10) {
        return inpValue;
      } else {
        return inpValue.value.slice(0,10);
      }
    }

    window.addEventListener('hashchange', () =>{
      let item = window.location.hash.split("#")[1].replace("%20", " ");
      console.log(item);
      noteOutput.innerText = localStorage.getItem(item);
    });


});