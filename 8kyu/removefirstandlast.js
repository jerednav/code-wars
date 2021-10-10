//It's pretty straightforward. Your goal is to create a function that removes the first and //last characters of a string. You're given one parameter, the original string. You don't //have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1,-1);
  };
  
  /*must take in the index of the string.
  1= first letter of the string
  -1 = last letter of the string
  
  
  Parameters
  Given one parameter, the original string
  
  Return
  Return string with the first and last character missing
  
  Example
     assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
    
    Pseudocode
    1. Use slice to start at the second character and end at the second to last character
  
