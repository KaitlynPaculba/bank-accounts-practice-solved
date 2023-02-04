
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

// import { bankAccounts, flatArraysData } from "../data/data.js";
// const array = bankAccounts.map((obj) => obj);


export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  const aboveMax = [];
  const deposits = [];
  const depositsDown = [];
  const hold = [];
  let sum = 0;
  const max = 2000;

  for (let i = 0; i < array.length; i++) {
    if (array[i].deposits !== undefined) {
      deposits.push(array[i].deposits)
    } else {
      deposits.push([0]);
    };
  }
     
  for (let i = 0; i < deposits.length; i++) {
    hold.push(deposits[i]);
  for (let a = 0; a < deposits[i].length; a++) {
    sum = sum + hold[i][a]; 
    
  };
  const diff = sum > 2000;
  const flip = diff ? aboveMax.push(array[i]) : depositsDown.push(array[i]);
  sum = 0;
  }
  return depositsDown;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
