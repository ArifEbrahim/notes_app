class NoteStorage {

  create = (value) => {
    let key = this.getKey();
    localStorage.setItem(key,value);
  }

  getKey = () => Date.now();

}

