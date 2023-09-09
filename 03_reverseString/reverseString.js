const reverseString = function(string) {

let arrayWord = string.split('');
let lengthOfWord = string.length;
let reversedArray;
let reversedWord;


let i = 0;

while(i < lengthOfWord - 1){
reversedArray = arrayWord.splice(i,0, arrayWord[lengthOfWord-1]); 

i++;
};

if (i == lengthOfWord-1){
  reversedWord = reversedArray.toString();
  return reversedWord;
}

}

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
