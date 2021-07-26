// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(str){
  //create values for each value of the alphabet
  const alphabet = ' abcdefghijklmnopqrstuvwxyz'
  //create score for words 
    //split string into an array. 
    //reduce letters from array into a number, values are from the alphabet's index
  const wordScore = word => word.split('').reduce((a,c)=> a + alphabet.indexOf(c), 0)
  
  //create highest word and count value
  let highestWord = ''
  let highestCount = 0
  
  //split string of words
    //for each word, find which has the highest word count
  str.split(' ').forEach(w=>{
    const scoreCheck = wordScore(w)
    if (scoreCheck > highestCount) {
      highestWord = w
      highestCount = scoreCheck
    }
  })
  return highestWord
  }
