//let second = 0;
//let timer = null;
//what do you tryna do here
let numSec =0; // starting time
// the setInterval method

let second = document.getElementById("display");
let mainButton = document.getElementById("start-button");
second.textContent = numSec;

//you need to add something that stop the user to click the button
//multiple time
//how to prevent the user to hit it multiple time ?

//need to change the start to resume if it already run
//every time hit the button startCounting is called 
let id = 0;
function startCounting(){
    if(mainButton.textContent ==="Finish"){
        //what finish do? counting from start
        //change the button to start again
        stopCounting();
        numSec =0;
        second.textContent = numSec;
        mainButton.textContent ="Start";
    }
    else if(id ==0 && mainButton.textContent ==="Start"){
        id = setInterval(()=>{ //this is to stop etc
            numSec++;
            second.textContent = numSec;
        },1000); //delay is 1000ms = 1sec.
        mainButton.textContent = "Finish";
    }
   
}
//add resume and stop button ....

// this function stop the counting and set id = 0
function stopCounting(){
    clearInterval(id);
    id=0;
}



