Given a string, return a new string that has transformed based on the input:

    Change case of every character, ie. lower case to upper case, upper case to lower case.
    Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces.

- Split the string of words into separate strings using .split(‘ “), using the space as a delimiter
- Reverse words in separate strings, .reverse
- Join the array back into one string
- Split string into separate letters using .split(‘’), no space
- Map through the array to find if its uppercase or lower case
 - .map(e => e ==  e.toUpperCase() ? e.toLowerCase() : e.toUpperCase))
- Join the separate letters into a string


function stringTransformer(str) {
  return str.split(' ').reverse().join(' ').split('').map(e => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
}
