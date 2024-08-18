function bubbleprint() {
    var bubbles = "";
    for (var i = 1; i <= 152; i++) {
        var rn = Math.floor(Math.random()*10);
        bubbles += `<p id="bubble">${rn}</p>`;
    }
    document.querySelector("#pbbtm").innerHTML = bubbles;
    document.querySelectorAll("#bubble").forEach(bubble => {
        bubble.addEventListener("click", handleBubbleClick);
    });
}
bubbleprint();

var timer = 60;
var timeint;
function timeinterval() {
    timeint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#box2').textContent = timer;
        } else {
            clearInterval(timeint);
            replay();
        }
    }, 1000);
}
timeinterval();

function replay(){
    document.querySelector("#pbbtm").innerHTML = `<div id="endgame"><h1>Game Over</h1>
            <button id="replay">Replay</button></div>`;
            document.querySelector("#replay").addEventListener("click", restartGame);
}

let newhit = "";
function hitnumber() {
    newhit = Math.floor(Math.random() * 10);
    document.querySelector("#hitno").textContent = newhit;
}
hitnumber();

let score = 0;
localStorage.setItem('score', score);
document.querySelector("#box").textContent = score;

function handleBubbleClick(event) {
    const clickedNumber = parseInt(event.target.textContent);
    if (clickedNumber === newhit) {
        score+=10;
        document.querySelector("#box").textContent = score;
        localStorage.setItem('score', score); 
        bubbleprint();
        hitnumber();
    }
    else{
        replay();
    }
}

function restartGame() {
    score = 0;
    timer = 60;
    document.querySelector("#box").textContent = score;
    document.querySelector('#box2').textContent = timer;
    localStorage.setItem('score', score);
    bubbleprint();
    hitnumber();
    clearInterval(timeint);
    timeinterval();
}

