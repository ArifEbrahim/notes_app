class NoteStorage {

  create = (value) => {
    let key = this.getKey(value);
    localStorage.setItem(key,value);
  }

  getKey = (text) => {
    if (text.length < 20) {
      return text;
    } else {
      return text.slice(0,20);
    }
  }
}

