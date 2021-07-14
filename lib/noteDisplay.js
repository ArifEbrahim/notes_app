class NoteDisplay {

  all = (element) => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      let displayValue;
      if (value.length <= 20) {
        displayValue = value;
      } else {
        displayValue = value.slice(0,19);
      }
      element.innerHTML += `<a href="#${key}">${displayValue}</a><br>`;
    };
  }
}