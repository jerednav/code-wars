// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

 

// Constraints:

//     1 <= nums.length <= 105
//     -109 <= nums[i] <= 109

// Parameters
// Given an integer array nums

// Return
// Return true if any value appears at least twice in the array, 
//   and return false if every element is distinct
  
// Example
// 1.
// Input: nums = [1,2,3,4]
// Output: false
// 2. 
// Input: nums = [1,2,3,1]
// Output: true

// Pseudocode
// 1. create map of numbers and how many times they appear
//  let map = {}
 
// 2. Loop through integer arary and count how many times they appear
//   for (const num of nums) {
//     // If the current value is true then add 1 to the map, if not start at 1
//     map[num] = map[num] + 1 || 1
    
//  3. Loop through map objects, if there is a value higher than 2, 
//    then its returned false. If not, it is true

var containsDuplicate = function(nums) {
    let map = {}
    for (const num of nums) {
        map[num] = map[num] + 1 || 1
    }
    for(const char in map) {
        if(map[char] < 2) {
            return false
        } else {
            return true
        }
    }
};
