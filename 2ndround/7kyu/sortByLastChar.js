// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


Parameters
Given a string of words

Return
Return array sorted by the last letter in each word.

Example
 assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
    assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
    assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);    
  })

Pseudocode
1. split the string
2. sort by last letter (sort a,b) last, char


function last(x){
 return x.split(' ').sort((a,b) => a[a.length -1] -b[b.length -1])
}
