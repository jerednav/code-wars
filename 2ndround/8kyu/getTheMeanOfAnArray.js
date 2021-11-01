// It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
// All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// Parameters
// Given an array of numbers?
  
// Return
// Return the average of the array rounded down to it's nearest integer

// Example
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

// Pseudocode
// 1. Sum of all arrays
// 2. average out the numbers


function getAverage(marks){
  return Math.floor(mmarks.reduce((a,c)=>a+c)/marks.length)
}

or

function getAverage(marks){
  let marksSum= marks.reduce((a,c)=>a+c)
  return Math.floor(marksSum/marks.length)
}

