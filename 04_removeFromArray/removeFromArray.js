const removeFromArray = function(array, ...elementsToRemove) {
    let massive = array;
    for (let i = 0; i < massive.length; i++) {
        for (let j = 0; j < elementsToRemove.length; j++) {
            if (massive[i] === elementsToRemove[j]) {
                massive.splice(i, 1);
                i--;
        }
        }
    }
    return massive
};



// Do not edit below this line
module.exports = removeFromArray;
