
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.
//  const array = ["Ben", "Emma", "Sophia", "William", "Elijah", "James", "Lucas", "Mason",
//     "Mia", "Liam","Noah","Oliver","Ethan","Harper","Evelyn",];
   

 



  
//  console.log(aNames);
// console.log(notA);
export function separateNamesWithAFromRest(array) {
  const names = [];
  const aNames = [];
  const notA = [];
  for (let i = 0; i < array.length; i++) {  
    let hasA = false;
    let noA = false;
    for (let b = 0; b < array[i].length; b++) { 
      if (array[i][b] === 'a') {
        hasA = true;
        aNames.push(array[i])
      } else
        if (array[i][b] !== 'a') {
          noA = true;
        };
    };
    if (hasA === false && noA === true) {
      notA.push(array[i]);
    }; 
  };
  names.push(aNames);
  names.push(notA);
  return names;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
