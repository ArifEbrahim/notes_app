const describe = (tag, callback) => {
  console.log(tag);
  callback();
}

const it = (label, callback) => {
  console.log(`Test: ${label}`);
  callback();
}

const expect = (a) => {
  return {
    toEqual: (b) => {
      if (a == b) {
        console.log('Pass'); 
      } else {
        console.log('Fail');
      }
    },

    toBe: (b) => {
      if (a === b) {
        console.log('Pass'); 
      } else {
        console.log('Fail');
      }
    },

    isTypeOf: (b) => {
      if (typeof a === b) {
        console.log('Pass'); 
      } else {
        console.log('Fail');
      }
    },


  }
}


/*

syntax:

describe('playing with sums', () => {
  it('2 + 3 is equal to 4', () => {
    expect(2+2).toEqual(5);
  });
});
*/

/* other matchers

notToEqual
notToBeit
throwError
toBeCalled

*/