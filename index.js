function isPalindrome(word) {
  // Write your algorithm here
  const wordLength = word.length;
  for (let i = 0; i < wordLength/2; i++) {
    if(word[i] !== word[wordLength -1 -i]){
      return false
    }
  }
  return true
}

/* 
  Add your pseudocode here
  First find the word length. 
  Next use a method to iterate over the letters in the word.
  Find method to split the word.
  Use method to compare each half of the word. 
*/

/*
  Add written explanation of your solution here
  First find the word length. Next iterate over the letters in the word using a for loop,
  while including wordLength divided by two to split the word. Finally, use an if statement
  to verify the first and last characters are the same and to determine if each half of the 
  word is the same or not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
