//let second = 0;
//let timer = null;
//what do you tryna do here
let numSec =0; // starting time
// the setInterval method

let second = document.getElementById("display");
let mainButton = document.getElementById("start-button");
second.textContent = numSec;
let signal = false;



//you need to add something that stop the user to click the button
//multiple time
//how to prevent the user to hit it multiple time ?

//need to change the start to resume if it already run
//every time hit the button startCounting is called 
let id = 0;
function startCounting(signal){
    if(mainButton.textContent ==="Finish" && !signal){
        //what finish do? counting from start
        //change the button to start again
        stopCounting();
        numSec =0;
        second.textContent = numSec;
        mainButton.textContent ="Start";
        //remove the pause/resume btn
        const toRemove = document.getElementById("pause-resume-btn");
        if(toRemove) toRemove.remove();

    }
    else if((id ==0 && mainButton.textContent ==="Start") || signal){
        id = setInterval(()=>{ //this is to stop etc
            numSec++;
            second.textContent = numSec;
        },1000); //delay is 1000ms = 1sec.
        if(!signal){
            mainButton.textContent = "Finish";
            //add resume and stop button ....
            const btn = document.createElement('button');
            btn.textContent = "Pause";
            btn.setAttribute('id','pause-resume-btn');
            const container = document.getElementById("timer");
            container.appendChild(btn);
            btn.setAttribute('onclick', 'pauseReBtn()');
        }
    }
    
}
//function for the pauseReBtn

function pauseReBtn(){
    btn = document.getElementById("pause-resume-btn");
    if(btn.textContent ==="Pause"){
        btn.textContent ="Resume";
        //call the stopCoungting function
        stopCounting();
    }
    else if(btn.textContent ==="Resume"){
        btn.textContent ="Pause";
        signal = true;
        startCounting(signal); //bug here ...
    }

}

// this function stop the counting and set id = 0
function stopCounting(){
    clearInterval(id);
    id=0;
}



