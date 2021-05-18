// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    //create a minimum integer
    let min = args[0];
    //loop through the array
    for (let i = 0; i < args.length; i++) {
      //make an if loop, if value of the array index is less than the first array index, then the
      //minimum value will change
      if (args[i] < min) {
        //make min equal the lowest value of the array
        min = args[i];
      }
    }
    return min;
  }
}
