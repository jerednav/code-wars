// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
// See test cases for more examples.
// Good luck!
// If you like this Kata, please try:

function solve(arr) {
Let newArr = []
  arr.map(x => (...new Set(x).length).reduce((a,c)=> a*c, 1)
};


// Pseudocode:
// Arr = array of arrays
// Need to MAP through each subarray of the array, doesn’t take into account what is in each subarray
// For the example, the x in the map method wold be
// [1,2]
// [4]
// [5,6]
// Since we know x is the subarray, we can use the set spread operator for arrays (x)
// [... new Set(x)] gives us a new array with no duplicates added, we would then get the length of each subarray with .length method
// As we map through these sets, we end up with how many unique numbers there is in each array.
// We then reduce the [2,1,2]
// Accumulator is the variable to store stuff and c is the current value. 
// 1 * 2 = 2
// 2 * 1 = 2
// 2 * 2 = 4
// Reduce is going to take the current value and multiply it by the accumulator. We assume the accumulation is 1.
// Reduces to 4



