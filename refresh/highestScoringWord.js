Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.

Parameters
Given string of words, find highest scoring word

Return
Highest scoring word as a string
If two words score the same, return the word that appears earliest in the original string
All letters will be lowercase and all inputs will be valid

Example
Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano');
Test.assertEquals(high('take me to semynak'), 'semynak');

Pseudocode
- Create alphabet string to create values for each alphabet letter
 - Const alphabet = ‘0abcdefghijklmnopqrstuvwxyz’
- Create a function related to the score of each word
 - Const wordScore  = word => word.split(‘’).reduce((a,c) => a + word.indexOf(c), 0)
  - Split words into an array 
  - Use reduce to add up the indexes of each letter and sum them all
- Use 2 variables to compare word scores
 - Let highestWord = ‘’
 - Let highestCount = 0
- So far, we have 3 things: the scores of each word, highest word as a string, highest count with a placeholder of 0
 - Split the words passed into the parent function into an array
  - This will split the whole string iven into an array of elements, which are our words, since the words are separated by spaces.
  - E.g. - [‘what’, ‘time’, ‘are’, ‘we’, ‘climbing’, ‘up’, ‘the’, ‘volcano’]
-  Use the .forEach method, iterate through array and for each element (w, which stands for word), 
  - Create variable scoreCheck, which is the result of the function “wordScore”, which we already defined as ‘w’.
  - Const scoreCheck = wordScore(w)
 - Use if statement, to iterate through array, and find the highest word. If the scorecheck is higher than the last highest word, it will replace it
 - If (scoreCheck > highestCount) {
   highestWord = w
   highestCount = scoreCheck
}
        )}
        Return highestWord
        }

Solution
function high(str) {
    const alphabet = ' abcdefghijklmnopqrstuvwxyz'
    const wordScore = word => word.split('').reduce((a,c)=> a + alphabet.indexOf(c), 0)
    let highestWord = ''
    let highestCount = 0
    str.split(' ').forEach(w=>{
      const scoreCheck = wordScore(w)
      if (scoreCheck > highestCount) {
      highestWord = w
      highestCount = scoreCheck
      }
  })
  return highestWord
  }
console.log(high('what time are we climbing up the volcano'));

