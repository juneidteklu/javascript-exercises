
const sumAll = function(num1, num2) {

    let sumOfNumbers = 0;
    if(typeof num1 == "number" && typeof num2 == "number" && num1 >= 0 && num2 >= 0){
            if (num1 > num2){
                for (let i = num2; i <= num1; i){
                    sumOfNumbers += i++;
                    
                    
                }
            }
            else {
                for (let i = num1; i <= num2; i){
                    sumOfNumbers += i++;

            }

        }
    }
    else {sumOfNumbers = "ERROR"}

return sumOfNumbers;
}


sumAll(1,4);



// Do not edit below this line
module.exports = sumAll;

