The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. 
The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

Parameters
Given an Array of numbers

Return
Return an array of [second olest, oldest age]

Example
  assert.strictEqual(results1[1],87, 'Passed values of [1,5,87,45,8,8] should return [45, 87]');
    assert.strictEqual(results2[0], 18, 'Passed values of [6,5,83,5,3,18] should return [18, 83]');

Pseudocode
1. sort in ascending order
2. slice from the end (-2)

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  return ages.sort((a,b) => a-b).slice(-2)
}
