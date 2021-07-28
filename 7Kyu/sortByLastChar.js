// Given a string of words (x), you need to return an array of the words, 
//   sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show 
// them in the order they appeared in the given string.

// All inputs will be valid.

function last(x){
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}


// parameters
//   given a string of words (x)

// return
// array of words, sorted alphabetically by the final character in each

// example
// Test.assertSimilar(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);

// pseudocode
// 1. split words into separate elements in an array
// 2. find character
