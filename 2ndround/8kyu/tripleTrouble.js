// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

Parameters
Three letters

Return
Return a string that comines all of the letters of the three inputed strings in groups.
Taking the first letter of all of the inputs and grouping them next to each other.

Example
 assert.strictEqual(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
    assert.strictEqual(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
    assert.strictEqual(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
    assert.strictEqual(tripleTrouble("Sea","urn","pms"), "Supermans"); 
    assert.strictEqual(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
  });

Pseudocode
1. Create result string
2. loop through each parameter 
3. Concatenate the three letters


function tripleTrouble(one, two, three){
   var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i]
  }
  return result;
 }
