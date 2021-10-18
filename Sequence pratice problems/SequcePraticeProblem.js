/* 1st 
* Using random fuction
*/
let digit1=Math.floor(Math.random()*10);
console.log("random number upto 10 is "+digit1);

/* 2nd
* Using random to get numbers from dice
*/
let digit2=Math.floor(Math.random()*6+1);
console.log("random from dice is "+digit2);

/* 3rd
* Using random to get numbers from dice
*/
let digit3=Math.floor(Math.random()*6+1);
let digit4=Math.floor(Math.random()*6+1);
let digit5=digit3+digit4;
console.log("The two random dice are as follows " +digit3+" + "+digit4+" = "+digit5);

/* 4th
* Using  random get five two digit numbers and find sum and avg
*/
var sum=0;
for(let i=1;i<6;i++){
var digit6=Math.floor(Math.random()*1000/10);
console.log(i+"th number is = "+digit6);
var sum=sum+digit6; 
}
console.log("Sum = "+sum);
let avg=sum/5;
console.log("Avg = "+avg);