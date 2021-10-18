An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

    The starting array sequence is [1,2,3,4,5,6,7,8,9]
    The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
    Your function should return the int 5.

If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

Parameters
Order sequence of numbers from 1 to N

Return
Return the numbers that was deleted after being mixed.

Example:
  The starting array sequence is [1,2,3,4,5,6,7,8,9]
    The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
    Your function should return the int 5.

Pseudocode
1. Add up totals of arr and mixArr using reduce
2. Subtract the totals to find the missing number

arrSum = arr.reduce((a,c) => a + c, 0)
arrMix = arrMix.reduce((a,c) => a +c, 0)

return arrSum - arrMix
