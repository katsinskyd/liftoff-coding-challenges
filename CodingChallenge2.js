// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

// All test arrays will have at least one element and are valid.

function minMax(array) {
    let sortedArray = array.sort(function(a, b){return a - b});
    return `[${sortedArray[0]}, ${sortedArray.pop()}]`;
  }
  
  console.log(minMax([1, 2, 3, 4, 5]));
  console.log(minMax([2334454, 5]));
  console.log(minMax([1]));