/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F */


function abbrevName(name){

    var nameArray = name.split(" "); 
  //.split method with a space in between, splits the words into seperate strings
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  //grab the first letter of both the first and last name, then upper case them
  }