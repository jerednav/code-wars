In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
For example:
solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.
More examples in the test cases.
Good luck!

  Parameters
  - an array of unique numbers
  
  Return
  - a sorted array, arrange by first max, first min, then 2nd max, 2nd min, etc.
  
  Examples
  - Example: solve([15,11,10,7,12]) = [15,7,12,10,11]

  Pseudocode
  - sort the array ( .sort(a,b) => b-a) to sort in descending order
  - slice through original array, which creates a new array to hold the next change.
  - map through array using index to seperate highest and lowest numbers from the previous array.
  - if index % 2 then take the last element of the array (.pop), if not add array[index/2]


SOLUTION
const solve = array => array
  .sort((a, b) => b - a)
  .slice()
  .map((value, index) => index % 2 ? array.pop() : array[index / 2])


Sample Test
- solve([15,11,10,7,12])
sort array
- ([15, 12, 11, 10, 7])
-slice through array
array1 = []
-map through array (=> if equal to one then array.pop ? if not, array[index/2])
.map((15, 0) =>  0 % 2 ? array.pop() : array[0/2]) = 0 array[index/2] = array[0]
.map((12, 1) =>  1 % 2 ? array.pop() : array[1/1]) = 1 array.pop(12) =
  array1= [15,12]
.map((11, 2) =>  2 % 2 ? array.pop() : array[2/2]) = 1

.map((10, 3) =>  3 % 2 ? array.pop() : array[3/2])
.map((7, 4) =>  4 % 2 ? array.pop() : array[4/2])





[15,7,12,10,11]
