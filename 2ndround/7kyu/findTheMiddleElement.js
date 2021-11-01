// As a part of this Kata, you need to create a function that when provided with a triplet, 
//   returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0

// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1

// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// Parameters
// Given an array of numbers unsorted

// Return
// Reutrn the index of the 

// Examples
// Test.assertEquals(gimme([2, 3, 1]), 0, 'Finds the index of middle element');
// Test.assertEquals(gimme([5, 10, 14]), 1, 'Finds the index of middle element')
//   });

// Pseudocode
// 1. Sort the arary using the sort method
// 2. Grab the index of the middle numbers, [1]
// 3. Use spread operator to create new array
// 4. We then sort them into an array and find the index of


function middleElementIndex(arr){
  return arr.indexOf(arr.sort((a,b)=> a -b)[1])
}

console.log([2, 3, 1], 0)
