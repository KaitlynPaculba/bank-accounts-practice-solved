// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]
 
export function getClientsWithLetterInName(array, letter) {
  const found = [];
  const names = [];
  const letUp = letter.toUpperCase();
  const letLow = letter.toLowerCase();
  for (let i = 0; i < array.length; i++) {
      names.push(array[i].name);
    };
  for (let i = 0; i < array.length; i++) {
    if (names[i].indexOf(letter) !== -1 ||
        names[i].indexOf(letUp) !== -1 ||
        names[i].indexOf(letLow) !== -1) {
      found.push(names[i]);
    };
};
  return found;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
