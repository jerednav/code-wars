The goal of this exercise is to convert a string to a new string where each character in the new 
string is "(" if that character appears only once in the original string, or ")" if that character 
appears more than once in the original string. Ignore capitalization when determining if a character 
is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

Parameters
- Given a string

Return 
- new string where each character appears once is "("
- if the character appears more than once in the original string ")".
- ignore capitilization when determining if a character is a duplicate.

Examples
- "din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Pseudocode
-  lower case all letters  in string
-  split string into an array of strings
-  map through array, must map within a function due to the array
and iterate through array using indexOf to find index of each letters
-  make .lastindexOf of array to iterate in reverse to find indexes
- if the index is found for first time, create '('
-  if index is recurring, add ')'
- join them into an array


function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map(function(v, i, arr){
    return arr.indexOf(v) == arr.lastIndexOf(v) ? '(' : ')'})
    .join('')
  console.log(duplicateEncode('din'))
}



