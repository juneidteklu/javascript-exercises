const removeFromArray = function(array, removedElement) {

    let newArray = array.filter((element) => element != removedElement); /*maybe instead of element != removedELement, it needs to check each array element of removedELement. Because right now, I think its saying that removedELement is all one unit when it needs to see each number of that array as its own unit. */
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
