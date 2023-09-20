const removeFromArray = function(array, removedElement) {

    let newArray = array.filter((element) => element != removedElement);
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
