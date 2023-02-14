const palindromes = function (word) {
    word = word.toLowerCase();
    //remove special characters
    //carat means a range, square brackets indicate a char class
    word = word.replace(/[^a-z]/g, '')
    let wordArr = word.split(' ');


    let oneWord = '';
    //take spaces out
    if (wordArr.length > 1){
        wordArr.forEach(item => oneWord += item)
        
    } else {oneWord = word}

    let length = oneWord.length;
    let reverse = '';
    for (let i = (length - 1); i >= 0; i--) {
        reverse += oneWord.charAt(i);
    }

    return reverse === oneWord
};

palindromes('ZZZZ car, a man, a maracaz')

// Do not edit below this line
module.exports = palindromes;