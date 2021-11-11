//In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//     dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

Parameters
Given an array of strings


Return
Return a new array that remove all consecutive duplicate letters from each string.

Example
    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
    dup(["kelless","keenness"]) = ["keles","kenes"].

Pseudocode
1. Map through each string of the array
2. Split each string into seperate letters
3. the new array of strings(seperated letters)
4. Filter through each string and check if it matches the old string.
5. Join them

function dup(s) {
  return s.map(x=>x.split('').filter(e, i arr) => e != arr[i-1]).join(''))
}


