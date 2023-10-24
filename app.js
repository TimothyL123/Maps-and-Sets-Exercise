// What does the following code return?

new Set([1,1,2,2,3,4])

// Set(4) {1, 2, 3, 4}


// What does the following code return?

[...new Set("referee")].join("")

// 'ref'


// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true); // -> Map(3) {Array(3) => true, Array(3) => false, Array(3) => true}
m.set([1,2,3], false); // -> Map(4) {Array(3) => true, Array(3) => false, Array(3) => true, Array(3) => false}


// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate.

const hasDuplicate = arr => new Set(arr).size !== arr.length


// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = str => Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;