// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}

// or

function solution(string) {
  string = string.split('').map(function (el) { //.map to filter through array  
    if (el === el.toUpperCase()) { //uses fuction to find uppercase and replace it with space before the word
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
