It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.

Parameters
Given a string

Return
return string without first and last characters

Example
   assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');

Pseudocode
1. Slice starting from second character an second to last


function removeChar(str){
 return str.slice(1,-1)

};

