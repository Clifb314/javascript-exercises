const sumAll = function(start, end) {

    if (!(Number.isInteger(start)) || !(Number.isInteger(end)) || start < 0 || end < 0) {
        return 'ERROR';
    }
    
    if (start > end) {
        let tmp = start;
        start = end;
        end = tmp;
    }


    let sum = 0;

    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
