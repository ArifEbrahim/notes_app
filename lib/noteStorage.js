'use strict';

class NoteStorage {

  create = (value) => {
    let key = Date.now();
    localStorage.setItem(key,value);
  };

  delete = () => {
    let key = location.hash.split("#")[1];
    localStorage.removeItem(key);
  };

};

