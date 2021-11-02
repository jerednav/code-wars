// In this Kata, you will be given an array of numbers in which two numbers occur 
// once and the rest occur only twice. Your task will be to return the sum of the numbers 
// that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
//   and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

Parameters
Given an array of numbers in which two numbers occur once and the rest occur only twice.

Return
Return the sum of the numbers that occur only once.

Example
Test.assertEquals(repeats([4,5,7,5,4,8]),15);
Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]),19);
Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12);
Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22);
Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]),24);

Pseudecode
1. Filter through array
2. find duplicates using indexof and lastindexof, if the indexes match up, it will go in the filter.
3. reduce the filtered numbers


function repeats(arr){
  return arr.filter(num=>arr.indexOf(num) === arr.lastIndexOf(num)).reduce((a,c)=>a+c, 0)
};
