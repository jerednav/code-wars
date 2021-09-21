Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

Parameters
Given string of words

Return 
Return first word entries

Example
 Test.assertEquals(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta');

Pseudocode

- Split string of words into separate strings
- Filter through each string to find consecutive duplicates
- filter((e, i, arr)
  E = current element being processed
  I = index of current elemen being process in the array
  A = the array filter was called upon
- Join the remaining strings into one string


Solution 
const removeConsecutiveDuplicates = s =>
s.split(" ").filter((e, i, arr) => e != arr[i -1]).join(" ")

