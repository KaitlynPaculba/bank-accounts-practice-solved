// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]
export function getNumbersWithSquareRoots(max) {
 const nums = [];
  const roots = [];
  const tRoots = [];
  const fRoots = [];
  for (let i = 0; i < max; i++) {
    nums.push(i);
  };
  for (let i = 0; i < max; i++) {
    let sum = nums[i] * nums[i];
    roots.push(sum);
  };
  for (let values of roots) {
    let sum = values < max;
    const flip = sum ? tRoots.push(values) : fRoots.push(values);
  };
  return tRoots;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
