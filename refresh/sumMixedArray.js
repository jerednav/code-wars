Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.

PREP

Parameters
    Given an array of integers as strings/numbers
Return
    Return sum of the array values if all were numbers
Examples
    sumMix([9, 3, '7', '3']), 22);
Pseudocode
Map strings/numbers into only numbers
.reduce to accumulate the numbers

x.map(x =>(x)).reduce((a, c) => a +c )
