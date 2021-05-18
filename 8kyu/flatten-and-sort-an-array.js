/* Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well */

"use strict";

function flattenAndSort(array) {
  var newArray = []; //create a new array
  for(var i =0;i<array.length;i++) //loop through the set of arrays
  {
    for(var j=0;j<array[i].length;j++) //loop through the numbers inside of each array
    {
      newArray.push(array[i][j]); //push into the newArray
    }
  }
    
  return newArray.sort((a,b) =>  a-b); //sort the numbers in the new array
}
 
OR

function flattenAndSort(array) {
  return array
    .reduce((result, current) => [...result, ...current],[]) //reduce the array into one value
    .sort((a, b) => a - b)
    ;
}

