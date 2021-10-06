You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


Parameters
Given an array of numbers

Return
Return an array, 
sort the odd numbers in ascending order while leaving their numbers at their original position


Example
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

Pseudocode
1. create variable for odd numbers
2. sort odd numbers (x % 2 = 1)
3. .filter to filter odds
4. then sort them
5. map through old array replacing each odd number in order

function sortArray(array) {
  const oddNums = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? oddNums.shift() : x);
}
