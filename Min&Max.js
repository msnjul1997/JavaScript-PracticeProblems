const getRandomNumber1 = Math.floor(Math.random() * 1000)
var num1 = getRandomNumber1
const getRandomNumber2 = Math.floor(Math.random() * 1000)
var num2 = getRandomNumber2
const getRandomNumber3 = Math.floor(Math.random() * 1000)
var num3 = getRandomNumber3
console.log("All the number are "+num1,num2,num3)
var max = num1
if(num2 > num1 && num2 > num3){
    max = num2
}
else if (num3 > num1 && num3 > num2) {
    max = num3
}
console.log("The largest number is :"+max)
var min = num1
if(num2 < num1 && num2 < num3){
    min = num2
}
else if (num3 < num1 && num3 < num2) {
    min = num3
}
console.log("The minimum number is :"+min)