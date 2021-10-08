Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

Parameters
Write a function that takes a single string (word) as argument 

Return 
Return an ordered list containing the indexes of all capital letters in the string

Example
 assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] 
                  
Pseudocode
1. make new array
                  2. loop through array
                  3. if word[i] == word[i].toUppercase then push to new array

4. return the new array

Solution

var capitals = function (word) {
	let capArray = []
  for (let i=0; i < word.length; i++){
    if (word[i].toUpperCase() == word[i])
      capArray.push(i)
  }
  return capArray;
};
