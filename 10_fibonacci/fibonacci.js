const fibonacci = function(position) {
    if (position < 0) {return 'OOPS'}
    if (position < 3) {return 1}

    let seq = [1, 1]
    //let a;
    //let b;
    //for (let i = 1; i < (position - 1); i++) {
    //    a = seq[i-1];
    //   b = seq[i];
    //   seq.push(a + b);
    //}

    //return seq[(position - 1)]
    // I think we're meant to do this with reduce. Maybe now because it steps through
    //every value?
    for (let i = 1; i < (position - 1); i++) {
        seq.push(seq.reduce(getSum, 0))
    }

    function getSum(a, b) {
        return a + b
    }
};

// Do not edit below this line
module.exports = fibonacci;
