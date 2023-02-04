
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]
// import { bankAccounts } from "../data/data.js";
// const array = bankAccounts.map((obj) => obj);




export function getClientsWithWrongBalance(array) {
  const deposits = [];
  const withdrawals = [];
  const balance = [];
  const depSum = [];
  const witSum = [];
  const balCheck = [];
  const holdD = [];
  const holdW = [];
  const wrongBalance = [];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let undDep = array[i].deposits === undefined;
    let undWit = array[i].withdrawals === undefined;
    let undBal = array[i].balance === undefined;
    const flipD = undDep ? deposits.push([0]) : deposits.push(array[i].deposits);
    const flipW = undWit ? withdrawals.push([0]) : withdrawals.push(array[i].withdrawals);
    const flipB = undBal ? balance.push([0]) : balance.push(array[i].balance);
  };

  for (let i = 0; i < deposits.length; i++) {
    holdD.push(deposits[i]);
    for (let a = 0; a < deposits[i].length; a++) {
    sum = sum + holdD[i][a];
    };
    depSum.push(sum);
    sum = 0;
  };

  for (let i = 0; i < withdrawals.length; i++) {
    holdW.push(withdrawals[i]);
    for (let a = 0; a < withdrawals[i].length; a++) {
    sum = sum + holdW[i][a];
    };
    witSum.push(sum);
    sum = 0;
  };

  for (let i = 0; i < balance.length; i++) {
    sum = depSum[i] - witSum[i];
    balCheck.push(sum)
    if (balCheck[i] !== balance[i]) {
      wrongBalance.push(array[i]);
    }; 
  };
  return wrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
