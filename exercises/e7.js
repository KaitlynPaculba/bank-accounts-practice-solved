// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]


export function getClientWithLeastBalance(array) {
  let max = 0;
  let almostBroke = [];
  let exZero = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 0) {
      exZero.push(array[i]);
    };
  };
  for (let i = 0; i < exZero.length; i++) {
    if (exZero[i].balance > max) {
      max = exZero[i].balance
    };
  };
  for (let i = 0; i < exZero.length; i++) {
    if (exZero[i].balance < max) {
      max = exZero[i].balance;
    };
  };
  for (let i = 0; i < exZero.length; i++) {
    if (max === exZero[i].balance) {
      almostBroke.push(exZero[i]);
    };
  };
  return almostBroke;
 }
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
