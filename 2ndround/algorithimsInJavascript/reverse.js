// Given a string of characters as input, write a function that returns it with the characters reversed. 
// No Reverse Method (well brute force it first, but then no reverse method)! 
    
  
  function reverseStr (str) {
  return split('').reverse().join('')
}
  
//create empty string => loop char => add each to string
 let reverString = ""
  for(let char of str) {
    reverseStr = char + reverseStr
    //this will cause the strings to be added in reverse
  } 
  return reverseStr
  }

console.log(reverseStr('bob'), 'bob')
console.log(reverseStr('john'), 'nhoj'
