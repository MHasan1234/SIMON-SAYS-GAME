let gameSeq = [];
let userSeq = [];  // arrays are empty before game is started

let btns = ["yellow", "red","purple", "green"];

let started = false;
let level = 0;

let  h2 = document.querySelector("h2");

document.addEventListener("keypress", function() { // eventListener is applied on  Document because we want to apply the event listener on the whole page
    if(started ==  false){ // A conditional is added so that new game does not starts everytime a key is pressed // checked if game has not yet started
        console.log("game is started");
        started = true; // after game is started , true is assigned to show that the game has started

        levelUp();
    }
});  //LEVEL--1 IS COMPLETED HERE

//game flash
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}
// userflash
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = []; // used to start the sequence from the start, so that every button can be clicked from the start
    level++;
    h2.innerText = `Level ${level}`;
   
    // random button choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn  = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
// LEVEL-2  IS COMPLETED HERE

function checkAns(idx) {
    // console.log("curr level : ",level);
    // let idx = level - 1;
    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";

              }, 150);
            reset();
        
    } 
 
}
//button press
function btnPress() {
    // console.log(this);
    let btn =this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
// reset is applied
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
