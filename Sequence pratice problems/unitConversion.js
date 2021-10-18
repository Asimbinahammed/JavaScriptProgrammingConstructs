let feet,inch;

/* inch to feet conversion
* 1 feet=12 inch;
* 1 inch=1/12 feet;
*/
inch=42;
feet=42*(1/12);
console.log("42 inch is = "+feet+" feet");

/*
* feet into meters
* 1 feet = 0.3048 meter
*/
var width=60;
var length=40;
var area=width*length;
console.log("area in feet ="+area);
area=area*0.3048;
console.log("area in meter = "+area);

var plotNum=25;//num of such plots
var totalArea=area*25;
console.log("total area in meter = "+totalArea);