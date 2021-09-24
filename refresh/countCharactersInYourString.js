The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

Parameters
  - Given a character of strings


Return 
  - If strings empty return {}
  - Return count of recurring characters
  
 Examples
  - Test.assertDeepEquals(count("aba"), { a: 2, b: 1 }); 
  - Test.assertDeepEquals(count(""), {});  

Pseudocode
  - objects have key:value pair. javascript has property:value pair
  - to get values, we must loop through the characters and update the values 
  - create empty object, let charCount = {}
  - split the string into an array, without a delimiter ['a', 'b', 'a']
  - use .forEach to access each character in the array of strings. it will
  loop through each individual letter.
  - .forEach begins with 'a', it will set the property equal to 1 (a:1)
  - same for b (b:1)
  - same for a (a:2)
  - the forEach method starting at the first character (written as 'c' which stands for character)
  - once you have the first character, add it to charCount.
  - if the character already exists, increment by one
  - if it doesnt, set value to 1
.forEach(c=> charCount[c] ? charCount[c]++ : charCount[c]=1)

Solution
function count (string) {  
  let charCount = {}
  string.split('')
  .forEach(c=> charCount[c] ? charCount[c]++ : charCout[c]=1)
  return charCount
}


For of loop

function totalCount(str) {
  let totalChars = {}
  
  for (let char of str) {
    totalChars[chars] = (totalChars[chars] || 0)+ 1
  }
  return totalChars
  
}
