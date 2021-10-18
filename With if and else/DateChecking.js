
var readline = require('readline-sync');

var month = readline.question("enter month in number : ");
var day = readline.question("enter day in number : ");

if(3<=month && month<=6){
    if(month==3){
        if(day>=20){
            console.log("true");
        }else{
            console.log("False");
        }
    }else if(month==6){
        if(day<=20){
            console.log("true");
        }else{
            console.log("False");
        }
    }  
}else{
    console.log("False");
}
