var num1=Math.floor(Math.random()*10000/10);
console.log("1st number is = "+num1);

var num2=Math.floor(Math.random()*10000/10);
console.log("2nd number is = "+num2);

var num3=Math.floor(Math.random()*10000/10);
console.log("3rd number is = "+num3);

if(num1>num2){
    if(num1>num3){
        console.log(num1+" is th greatest");
    }else{
        console.log(num3+" is the greatest");
    }   
}else if(num2>num3){
    console.log(num2+" is the greatest");
}else{
    console.log(num3+" is the greatest");
}