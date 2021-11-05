// Your task is to remove all consecutive duplicate words from a string, 
//   leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

Parameters
Given an array of strings(words)

Return
Return the array with all consecutive duplicates words from a string

Example
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


Pseudocode
1. split the words in the array
2. filter through the array
3. if the current element matches the current element index minus 1, then join them after

const removeConsecutiveDuplicates = s => s.split(" ").filter((e, i, arr) => e != arr[i - 1]).join(" ");
