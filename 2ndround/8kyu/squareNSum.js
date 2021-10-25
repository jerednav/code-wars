// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Parameters
// Given array of numbers

// Return
// Return square of each number and sums the results together

// Example
// Test.assertEquals(squareSum([1,2]), 5)
// Test.assertEquals(squareSum([0, 3, 4, 5]), 50)

// Pseudocode
// 1. Square each number of array
// 2. Add the sums together
// 3. Start index at 0

function squareSum(numbers){
  return numbers.reduce((a,c) => a + (c*c), 0)

}
