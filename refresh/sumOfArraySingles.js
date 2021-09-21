// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
// More examples in the test cases.
// Good luck!

// Parameters
// Given an array of numbers, in which two numbers occur once and the rest occur twice
// Return
// Return the sum of the numbers that occur only once.
// Example
// Test.assertEquals(repeats([4,5,7,5,4,8]),15);
// Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
// Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
// Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
// Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);

Parameters
Given an array of numbers, in which two numbers occur once and the rest occur twice

Return
Return the sum of the numbers that occur only once.

Example
Test.assertEquals(repeats([4,5,7,5,4,8]),15);
Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);

Pseudocode
- Filter through array, filter creates a new array with elements that pass the test implemented by the function
- .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
- Starting at x, see if element you’re at, matches the last element in the array. So .filer will create  a new array with all the integers that have a match. At the end, will leave two single digits in the original array. Ex. [7,8]
  - indexOf returns the index within the array of the first occurrence of the specified value, starting the search at fromIndex
  - lastIndexOf returns the index within the first occurrence start from the end of the array, going backwards
- .reduce to add the remaining parts of the array.


Solution

function repeats(arr) {
  return arr.filter(x => indexOf(x) === lastIndexOf(x)).reduce((a,c) => a + c)
}
