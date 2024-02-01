function removeFromArray(givenArray, someNumber){



    
    if (givenArray.indexOf(someNumber) >= 0){
        givenArray.splice(givenArray.indexOf(someNumber),1);
        return givenArray;
    }
    else return givenArray;






}

// Do not edit below this line
module.exports = removeFromArray;
