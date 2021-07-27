// // Given an array of numbers (in string format), you must return a string. 
// The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. 
// You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' 
// respectively.

// // All inputs will be valid.

const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')

//Parameters
// array of numbers (in strings)

// Return
// return a string

// Example
// Test.assertEquals(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');

// Pseudocode
// 1. correspond alphabet backwards to values, then connecting it to a variable
// 2. use map (using map because you need to create a new array)
// 3. going through each numbers in strings and corresponding it to the alphabet
// 4. join those corresponding letters, to create a string
