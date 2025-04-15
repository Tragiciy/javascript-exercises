
const palindromes = function (string ="hello") {
    let str = string.replace(/[^A-Za-z0-9]/g, '')

    str = str.toLowerCase();

    let splitStr = str.split('');

    let reverseStr = splitStr.reverse();

    let finalStr = reverseStr.join("")

    return str === finalStr;
};

// Do not edit below this line
module.exports = palindromes;
