Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: 
a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.

parameters
given a array of numbers in string format

return
return a string in letters

example
Test.assertEquals(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');

pseudocode
-create string of value of the letters
  let alphabet = [zyxwvutsrqponmlkjihgfedcba!? ]
-map through array and transform numbers into letters using arrow functions 
  - x => x.map(item => alphabet[item]).join()
                

 
let alphabet = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alphabet[item]).join('')
