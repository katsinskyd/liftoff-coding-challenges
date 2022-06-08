// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

// Expect any positive number between 1 and 1000.

function addUp(num) {
    let addNum = 0;
    while (num > 0) {
        addNum += num;
        num--;
    }
    return addNum;
}

console.log(addUp(4))
console.log(addUp(13))
console.log(addUp(600))