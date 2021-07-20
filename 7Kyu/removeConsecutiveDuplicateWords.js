// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => s.split(" ").filter((e, i, arr) => e != arr[i - 1]).join(" ");

//first, split the string of words into seperate strings.
//["alpha" "beta" "gamma" "gamma" "gamma" "delta" "alpha" "beta" "beta" "gamma" "gamma" "gamma" "delta"]
//use filter,
//  e = the current element being processed in the array
//  i = index of current element
//  arr = array filter was called upon
//if element (e), is not equal to the word before the index in array, join them in a new string of words


