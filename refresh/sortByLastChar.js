Given a string of words (x), you need to return an array of the words, sorted alphabetically by the 
final character in each.

If two words have the same last letter, they returned array should show them in the order they 
appeared in the given string.

All inputs will be valid.


Parameters
-Given a string of words

Return
- array of words, sorted alphabetically by the final character in each

Examples
- Test.assertSimilar(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
- Test.assertSimilar(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
- Test.assertSimilar(last('take me to semynak'), ['take', 'me', 'semynak', 'to']); 

Pseudocode
1. Split string into array of words (.split)
2. Sort the array in alphabetical order by last character (return x.split(' ').sort((a,b) => a[a.length] -b[b.length-1] )  )

.sort ((a, b) => a[a.length-1] > b[b.length-1]) (this sort by the last letter of each word, and sorts
                                                 it ascending order)
Since A is greter than b, it will return values in ascending order

1st run 
man[3-1] > i[1-1]  
man[2] > i[0]
n

2nd run
i[0] > need[4-1]
i > 




