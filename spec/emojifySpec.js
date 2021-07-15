'use strict';

describe('emojify', () => {

  it('can convert strings to emojis', () => {
    let emojify = new Emojify();
    let result = emojify.convert("Hello :smile: this is a test");
    result.then(data => expect(data).toEqual("Hello 😄 this is a test"));
  });
});
