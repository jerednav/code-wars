/* Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3] */

function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
  
  //String(n) is a function that takes anything and returns a string
  //Number turns into string
  ///.split(str) = split method of any string, which takes another string to split the first on and splits it into an array, if split contains "", it splits it into characters seperately
  //ex. 348597  => ["3", "4", "8", "5", "9", "7"]
  //.map function is the map function of an array. The function that's being called will iterate each number or string of the array, and convert it into a Number again.
  //.reverse the order of the Numbers given
  
  