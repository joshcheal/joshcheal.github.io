const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const youChose = document.getElementById("youChose");
const computerChose = document.getElementById("computer-chose");
const playerChoice = [rock, paper, scissors];
const computerOptions = ['Rock', 'Paper', 'Scissors']
const yourScore = document.getElementById("your-score")
const compScore = document.getElementById("computer-score")
const choiceContainer = document.getElementById("choice-container")
const winnercontainer = document.getElementById("winner-container");
const originalChoiceHTML = youChose.innerHTML;
const originalwinnercontainer = winnercontainer.innerHTML;

let playerScore = 0
let computerScore = 0
let compPick = "";


function displaychoice(event) {
    const choice = event.currentTarget.id;
    
    if ( choice === "rock") {
        youChose.innerHTML = "Rock";
    }
    else if (choice === "paper") {
        youChose.innerHTML = "Paper"
    }
    else if (choice === "scissors") {
        youChose.innerHTML = "Scissors"
    }
    
    computerChose.textContent = ""

    setTimeout(computerchoice,400);
    setTimeout(() => {
        pscore();
        cscore();
        winner();
    }, 800);
}

function computerchoice() {
    const random = Math.floor(Math.random() * 3)
    compPick = computerOptions[random]
    computerChose.innerHTML = compPick;
}
function pcolorchange() {
    yourScore.style.color = "red";
    setTimeout(() => {yourScore.style.color = "black";}, 1500);
}

function ccolorchange() {
        compScore.style.color = "red";
    setTimeout(() => {compScore.style.color = "black";}, 1500)
}

function pscore() {
    if (youChose.innerHTML === "Paper" && compPick === "Rock") {
        playerScore ++;
        pcolorchange();
        playerwins();
    } 
    else if (youChose.innerHTML === "Rock" && compPick === "Scissors"){
        playerScore ++;
        pcolorchange();
        playerwins();
    } 
    else if (youChose.innerHTML === "Scissors" && compPick === "Paper"){
        playerScore ++;
        pcolorchange();
        playerwins();
    } else {draw()}
    
    yourScore.innerHTML = playerScore;
}

function cscore() {
    if (youChose.innerHTML === "Paper" && compPick === "Scissors") {
        computerScore ++;
        ccolorchange();
        computerwins();
    } 
    else if (youChose.innerHTML === "Rock" && compPick === "Paper"){
        computerScore ++;
        ccolorchange();
        computerwins();
    } 
    else if (youChose.innerHTML === "Scissors" && compPick === "Rock"){
        computerScore ++;
        ccolorchange();
        computerwins();
    }
    compScore.innerHTML = computerScore;
}
function winner() {
    if (playerScore === 5) {
        youChose.innerHTML = "YOU WIN!";
        var x = document.getElementById("you-chose-hide");
        x.style.display = "none";
        var y = document.getElementById("computer-chose-hide");
        y.style.display = "none";
        computerChose.textContent = ""
    setTimeout(resetGame, 2000);
    }
    else if (computerScore === 5) {
        youChose.innerHTML = "COMPUTER WINS! Better luck next time!";
        var x = document.getElementById("you-chose-hide");
        x.style.display = "none";
        var y = document.getElementById("computer-chose-hide");
        y.style.display = "none";
        computerChose.textContent = ""

    setTimeout(resetGame, 2000);
    }
}

function computerwins() {
    winnercontainer.innerHTML = "Computer Wins";
    setTimeout(() => {winnercontainer.innerHTML = originalwinnercontainer;}, 1200);
}

function draw() {
    winnercontainer.innerHTML = "Draw";
    setTimeout(() => {winnercontainer.innerHTML = originalwinnercontainer;}, 1200);
}

function playerwins() {winnercontainer.innerHTML = "You Win";
    setTimeout(() => {winnercontainer.innerHTML = originalwinnercontainer;}, 1200);
}

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    compPick = "";

    yourScore.innerHTML = "0";
    compScore.innerHTML = "0";
    youChose.innerHTML = "";
    computerChose.textContent = "";

        var x = document.getElementById("you-chose-hide");
        x.style.display = "block";
        var y = document.getElementById("computer-chose-hide");
        y.style.display = "block";

    setTimeout(() => {
        youChose.innerHTML = originalChoiceHTML;
    }, 7000)
}

rock.addEventListener("click", displaychoice)
paper.addEventListener("click", displaychoice)
scissors.addEventListener("click", displaychoice)
