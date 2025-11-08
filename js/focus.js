const container = document.getElementById("timer"); // this is the container to append the child
const display = document.getElementById("display");
const mainButton = document.getElementById("start-button");

let id =null;
let state = "idle"; //state will be idle, running and stop
let sec = 0;

function startInterval(){
    if(id) return; //if they already run then return to prevent start twice
    id = setInterval(()=>{
        sec++;
        display.textContent = sec;
    }, 1000);
}
function stopInterval(){
    if(!id) return;
    clearInterval(id);
    id=null; 
}

function ensurePauseButton(){
    let btn = document.getElementById("pause-resume-btn");
    if(state ==="idle"){
        if(btn) btn.remove();
        return;
    }
    //if the button is not here
    if(!btn){
        btn = document.createElement("button");
        btn.setAttribute("id", "pause-resume-btn");
        btn.addEventListener("click",onPauseResume);
        container.appendChild(btn);
    }
    btn.textContent = state ==="running" ?"Pause"  :"Resume";
}

function render(){
    mainButton.textContent = state === "idle" ? "Start" : "Finish";
    ensurePauseButton();
    display.textContent = sec;
}


function onMainClick(){
    //running if it is idle
    if(state ==="idle"){
        //state is now running
        state = "running";
        startInterval();
    }
    //if it on running or paused
    //then hit finish will finish the timer
    else{
        stopInterval();
        sec = 0;
        state = "idle";
    }
    //display
    //changing the Start -> finish, finish to Start 
    render();
}

function onPauseResume(){
    if(state ==="running"){
        stopInterval();
        state = "paused";
    }
    else if(state ==="paused"){
        state = "running";
        startInterval();
    }
    render();
}



mainButton.addEventListener("click", onMainClick);
render();