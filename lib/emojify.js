'use strict';

class Emojify {

  convert = async(text) => {
    console.log(text);

    let note = {
      text: text
    }

    let params = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(note)
    };

    let response = await fetch('https://makers-emojify.herokuapp.com/', params)
    .then(response => response.json())
    .then(data => data.emojified_text);

    return response;
  };
};