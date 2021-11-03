Given an array of strings of the same letter type. Return a new array, which will differ 
in that the length of each element is equal to the average length of the elements of the 
previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

    If the average length is not an integer, use Math.round().
    The input array's length > 1


Parameters
Given an array of strings of the same letter type

Return
Return a new array, with the length of the average of each of the previous arrays

Example
['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3


Pseudocode
1. find average of all the numbers combined using Math.round for strings. (arr.join('').length/arr.length)
2. map through the array and map the new array
3. repeat the numbers based on the average using .repeat
