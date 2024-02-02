function removeFromArray(givenArray){
    for (let i = 1; i < arguments.length;i++){

        if (arguments.length >= 2) {

        if (givenArray.indexOf(arguments[i]) >= 0){
            givenArray.splice(givenArray.indexOf(arguments[i]),1);
            
        }
    
    }

    }
    return givenArray;
}



// Do not edit below this line
module.exports = removeFromArray;
