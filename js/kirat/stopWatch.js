
var counter = 1;
var counter11 = 1;

function printCounter(){
    console.log(counter);
    counter++;
}

setInterval(printCounter , 100); //setInterval is a function which takes two arguments

for(var i= 0; i<1000 ; i++) {
 counter11++;
}
console.log(counter11);
//first the for loop will be executed
//then the setInterval will be executed
//setInterval will be executed after every 100 ms
//setInterval is good for async programming
//setInterval is not good for callback hell