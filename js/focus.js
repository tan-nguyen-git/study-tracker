//let second = 0;
//let timer = null;
//what do you tryna do here
let numSec =0; // starting time
// the setInterval method

let second = document.getElementById("display");
second.textContent = numSec;

//you need to add something that stop the user to click the button
//multiple time
//how to prevent the user to hit it multiple time ?

//need to change the start to resume if it already run 
let id = 0;
function startCounting(){
   if(id ==0){
        id = setInterval(()=>{ //this is to stop etc
            numSec++;
            second.textContent = numSec;
        },1000); //delay is 1000ms = 1sec.
   }
}


function stopCounting(){
    clearInterval(id);
    id=0;
}



