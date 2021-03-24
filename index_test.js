var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it ('calculates the factorial of a number', ()=>{
      //Setup
      const inputNum = 3;
      const expectedResult = 6;
      //Exercise
      const result = Calculate.factorial(inputNum);
      //Verify
      assert.equal(result, expectedResult);
    })

    it ('returns 1 when you pass in 0', ()=>{
      //Setup
      const inputNum = 0;
      const expectedResult = 1;
      //Exercise
      const result = Calculate.factorial(inputNum);
      //Verify
      assert.equal(result, expectedResult);
    })
  });
});
