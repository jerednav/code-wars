// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//     dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(arr) {
  return arr.map((str)=>
  str.split('').filter((e,i)=>e !== str[i-1]).join('')
)
};

//Parameters
  array of strings
  
Return
  array of strings with no duplicate letters

Pseudocode
   1. map through the array for each string
   2. once mapped, split the string into letters
   3. filter through each letter
   4. 'a', 'l', 'l', 'o', 't', 't', 'e', 'e'  "allottee"
   5. example: .filter 
      (a, 0) => a !== str[0-1]
      (l, 1) => l ! == str[1-1]
      (l, 2) => l !== str [2-1]
      (o, 3) => o !== str [3-1]
      (t, 4) => t !== str [4-1]
      (t, 5) => t !== str [5-1]
      (e, 6) => t !== str [6-1]
      (e, 7) => t !== str [7-1]
    6. Then join the filtered letters into a string.
