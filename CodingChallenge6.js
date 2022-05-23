// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

function detectWord(crowd) {
    let breakCrowd = crowd.split('');
    let hiddenWord = '';
    for (let i = 0; i < breakCrowd.length; i++) {
        if (breakCrowd[i] == breakCrowd[i].toLowerCase()) {
            hiddenWord += breakCrowd[i];
        }
    }
    return hiddenWord;
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"))
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"))
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"))