// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

function repeats(arr){
  return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};

//filter method creates a new array with all elements that pass the test implemented by the provided function

//filter will run through index of from beginnning to end, and lastindexof from end to beginning
//until there is a match,  once a match is found, it will be added to the new array.

//reduce is used with the new array, to reduce the two numbers to one.
