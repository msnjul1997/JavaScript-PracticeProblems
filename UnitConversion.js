function ftToinch(ft){
    return ft *12
}
function inchToft(inch){
    return inch * 1/12
}
function ftTometer(feet){
    return feet *1/3.28084 
}
function area(l,w){
    return l*w
}
console.log("42 inches in feet is :"+inchToft(42))
var a = area(60,40)
console.log("Area of 60x40feet rectangle is "+a)
console.log("Area in meters is :"+ftTometer(a))