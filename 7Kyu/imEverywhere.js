// Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

// And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.
// Task:

// Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we 
// must return "iPhone". But we have a few rules:

//     The word should not begin with the letter "I", for example Inspire.
//     The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
//     The first letter should not be lowercase, for example road.

// If the word does not meet the rules, we return "Invalid word".


function i(word) {
  //first must convert string into an array in order to manipulate letters
    let vowels = Array.from(word.toLowerCase())
        .filter(letter => 'aeiou'.includes(letter)).length 
    //make an array or vowels, first make them lower case, then filter the vowels out
    //THen, get the length of vowels
    let consonants = Array.from(word.toLowerCase())
        .filter(letter => 'bcdfghjklmnpqrstvwxyz'.includes(letter)).length
   //make an array or consonants, first make them lower case, then filter the consonants out
    //THen, get the length of consonants
    if (word.slice(0,1).toLowerCase() === 'i' || // if, first leter (0 index) equals 'i'
        word.slice(0,1).toLowerCase() === word.slice(0,1) || //if first letter lowercased is equal to word normal case
        vowels >= consonants) { //vowels length are greather or equal to consonants
        return("Invalid word")
    }
    else {return('i'+word)}
}
