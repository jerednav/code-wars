/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2] */


function powersOfTwo(n){
    var result = []; //create an array
    for (var i = 0; i <= n; i++) { 
  // for loop with index starting at 0, keep loop going until n, increasing by 1
      result.push(Math.pow(2, i)); 
  //Math.pow returns (base, exponent)
  //base number and the exponent will be raised by the loop number
    }
    return result;
  }
    