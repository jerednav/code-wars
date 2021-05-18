/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 */


function stray(numbers) {
    var a = numbers.sort(); //sort numbers in numbers and replace it with variable "a"
    
    if(a[0] != a[1]) { //if the 0 index os a is not equal to the 1 index, return the index of 0
      return a[0]
    } 
    return a[a.length-1]
  }
  