// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  const withdrawals = []
  const withdrawalSum = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let wilth = array[i].withdrawals !== undefined;
  const unFlip = wilth ? withdrawals.push(array[i].withdrawals) : withdrawals.push([undefined]);
  };
  
  for (let i = 0; i < withdrawals.length; i++) {
    for (let a = 0; a < withdrawals[i].length; a++) {
      let diff = withdrawals[i][a] !== undefined;
      const inFlip = diff ? sum += withdrawals[i][a] : sum = 0;
      
    }
   withdrawalSum.push(sum);
  }

  return withdrawalSum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
