const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function LongestWord(sen) { 
    const removedPunctuation = sen.replace(regex, '');
    let wordArray = removedPunctuation.split(" ")

    wordArray.sort(function(a, b){
        return b.length - a.length;
    });
    return wordArray.shift(); 
  }

console.log(LongestWord("the@@@@^&$%^#$! lon'gest word is1"))