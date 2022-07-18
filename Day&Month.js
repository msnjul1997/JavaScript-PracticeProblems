const getRandomNumber1 = Math.floor(Math.random() * 31)+1
var days = getRandomNumber1;
console.log("Day is "+days)
const getRandomNumber2 = Math.floor(Math.random() * 12)+1
var month = getRandomNumber2;
console.log("Month is "+month)
switch (month) {
    case 3:
        if(days > 20){
            console.log("true")
        }
        else{
            console.log("false")
        }
        break;
    case 4:
        console.log("true")
        break;
    case 5:
        console.log("true")
        break
    case 6:
        if(days <20){
            console.log("true")
        }
        else{
            console.log("false")
        }
    default:
        console.log("false")
        break;
}