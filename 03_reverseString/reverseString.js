const reverseString = function(string) {
    let strlen = string.length - 1;
    if (strlen < 1) {
        return string;
    }
    
    let reverse;
    
    for (let i = strlen; i >= 0; i--) {
        if (i == strlen) {
            reverse = string.slice(i);
        }
        else {
            reverse += string.slice(i, (i+1))
        }
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
