const palindromes = function (word) {
    let word = word.toLowerCase;
    let wordArr = word.split(' ');

    //take spaces out
    if (wordArr.length > 1){
        let oneWord = '';
        wordArr.forEach(item => {
            oneWord += item;
        })
        else {let oneWord = word}
    }

    let length = oneWord.length;
    let reverse = '';
    for (let i = (length - 1); i <= 0; i--) {
        reverse += oneWord.charAt(i);
    }

    return reverse === oneWord
};

// Do not edit below this line
module.exports = palindromes;