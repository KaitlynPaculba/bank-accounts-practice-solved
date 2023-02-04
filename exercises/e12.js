
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  const deposits = []
  const undefinedStuff = [];
  const depositsUp = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let wilth = array[i].deposits !== undefined;
  const unFlip = wilth ? deposits.push(array[i].deposits) : undefinedStuff.push(array[i].deposits);
  };
  
  for (let i = 0; i < deposits.length; i++) {
    for (let a = 0; a < deposits[i].length; a++) {
      let diff = deposits[i][a] > 100;
      const inFlip = diff ? depositsUp.push(deposits[i][a]): undefinedStuff.push(deposits[i][a]);
    }
  }
  return depositsUp;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
