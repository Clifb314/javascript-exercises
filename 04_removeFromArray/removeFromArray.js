const removeFromArray = function(input, ...moreArg) {

    let output = input;
    let arrLen = output.length;
    let argLen = moreArg.length;

    for (i = 0; i < argLen; i++) {

        for (k = 0; k < arrLen; k++) {
            if (output[k] === moreArg[i]) {
                output.splice(k, 1);
            }
        }

    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
