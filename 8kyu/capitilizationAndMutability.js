Create a function that takes in a word and returns the word with the first letter capitalized.

Don't worry about numbers, special characters, or non-string types being passed to the function. 
The string lengths will be from 1 character up to 10 characters, but will never be empty.

Parameters



function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1)
}

console.log(capitalizeFirstLetter('word'), 'Word')
console.log(capitalizeFirstLetter('bob'), 'Word')
console.log(capitalizeFirstLetter('starwars'), 'Starwars')

Pseudocode
capitalize first letter
add the rest of the letters
return str[0].toUpperCase() + str.slice(1)
