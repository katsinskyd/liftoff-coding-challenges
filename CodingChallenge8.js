// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Your output must be case-sensitive (see second example).
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4

function charCount(char, string) {
    let counter = 0;
    const stringToArray = Array.from(string);

    for (let i = 0; i < stringToArray.length; i++) {
        if (char == stringToArray[i]) {
            counter++;
        }
    }

    return counter;
}

console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));