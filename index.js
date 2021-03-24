const Calculate = {
  factorial(inputNum) {
    let factorial
    if (inputNum === 0 || inputNum === 1){
      return 1;
    } else {
      let factorial = inputNum
      for (let i = inputNum-1; i > 0; i--){
        factorial *= i
        }
      return factorial
    }
  }
}

module.exports = Calculate;
