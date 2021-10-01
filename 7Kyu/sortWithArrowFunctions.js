Order People by age Using Arrow Function
Sort and Order people by their age using Arrow Functions
Task
Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
Input
Input will be a valid array with People objects containing an Age and Name
Output
Output will be a valid sorted array with People objects sorted by Age in ascending order

Parameters
- List of people by their age and name

Return
- Sorted array with people sorted by age

Example
- Test.assertSimilar(OrderPeople([ { age: 83, name: 'joel' },
{ age: 46, name: 'roger' },
{ age: 99, name: 'vinny' },
{ age: 26, name: 'don' },
{ age: 74, name: 'brendan' } ]),
                     [{age:26,name:"don"},{age:46,name:"roger"},{age:74,name:"brendan"},{age:83,name:"joel"},{age:99,name:"vinny"}], 'The array is still empty')
  });

Pseudocode
- Sort people by age using .sort method in ascending order

var OrderPeople = function(people){
  return people.sort((a,b) => a.age - b.age); //complete this function
}
