var readline = require('readline-sync');

var year = readline.question("Enter the year : ");

if (year.length == 4) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("leap year");
    } else {
        console.log("not leap year");
    }
} else {
    console.log("Not have 4 digits numbers");
}