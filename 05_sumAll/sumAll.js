
sumAll(1,4);

const sumAll = function(num1, num2) {

    let sumOfNumbers = 0;
    if (num1 > num2){
        for (let i = num2; i <= num1; i++){
            sumOfNumbers += ++i;
        }
    }
    else {
        for (let i = num1; i <= num2; i++){
            sumOfNumbers += ++i;

    }

}
return sumOfNumbers;
}



// Do not edit below this line
module.exports = sumAll;

