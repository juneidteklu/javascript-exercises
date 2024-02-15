const leapYears = function(givenYear) {
    let firstCheck = givenYear/4;
    if (Number.isInteger(givenYear/100)){
        switch (Number.isInteger(givenYear/400)){
            case Boolean(1):
                return Boolean(1);
                break;
            case Boolean(0):
                return Boolean(0);
                break;
        }
    }
    else {
        switch (Number.isInteger(firstCheck)){
            case Boolean(1):
                return Boolean(1);
                break;
            case Boolean(0):
                return Boolean(0);
                break;
        }
    }

};

// Do not edit below this line
module.exports = leapYears;
