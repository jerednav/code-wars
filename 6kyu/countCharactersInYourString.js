// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count (string) {  
  let charCount = {}
  string.split('')
  .forEach(c => charCount[c] ? charCount[c]++ : charCount[c]=1)
  return charCount
}

// Use .forEach() so we can access each character in the array of strings. .forEach() will loop through each individual letter.  
// At the beginning of the function, when .forEach() begins, the property will not have an ‘a’ in it.  So .forEach() will start on a false statement.  {}
// On the next round through the array, .forEach() will set the ‘a’ property to be equal to 1. {a:1}
// Next round, .forEach() does the same thing again, this time setting the ‘b’ property to be equal to 1. {b:1}
// Then finally, on the third round, .forEach() will add 1 to the original ‘a’, changing the object literal to {a:2}
