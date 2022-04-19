function minMax(array) {
    let sortedArray = array.sort(function(a, b){return a - b});
    return `[${sortedArray[0]}, ${sortedArray.pop()}]`;
  }
  
  console.log(minMax([1, 2, 3, 4, 5]));
  console.log(minMax([2334454, 5]));
  console.log(minMax([1]));