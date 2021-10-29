// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

Parameters
Given an array of numbers as strings and numbers

Return
Return the sum of the array values if all were numbers

Example
   assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
   assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
   assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

Pseudocode
1. Convert string into numbers 
2. Use reduce to accumulate numbers

function sumMix(x){
  return x.reduce((a,c)=>Number(a)+Number(c))
}
