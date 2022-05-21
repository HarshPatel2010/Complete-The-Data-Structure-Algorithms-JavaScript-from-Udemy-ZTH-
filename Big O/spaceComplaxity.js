function boooo(n) {
    for (let i = 0; i < n; i++) {//i is a new variable when this function call so val will update n time
        console.log('booooo');
    }
}

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6)