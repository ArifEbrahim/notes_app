'use strict';

class NoteStorage {

  create = (value) => {
    let key = this.getKey();
    localStorage.setItem(key,value);
  }

  getKey = () => Date.now();

  delete = () => {
    let key = location.hash.split("#")[1];
    localStorage.removeItem(key);
  }

}

