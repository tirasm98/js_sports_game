let resetButton = document.querySelector("reset-button")
let teamonesb = document.querySelector("teamone-shoot-button")
let shotsone = document.querySelector("teamone-numshots")
let goalsone = document.querySelector("teamone-numgoals")
let teamtwosb = document.querySelector("teamtwo-shoot-button")
let shotstwo = document.querySelector("teamtwo-numshots")
let goalstwo = document.querySelector("teamtwo-numgoals")
let resetCounter = document.querySelector("num-resets")

resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function (reset) {

    console.log("+ button clicked")
resetCounter = document.getElementById("num-resets")
let newResetCounter= Number(resetCounter.innerHTML) + 1;
    resetCounter.innerHTML = newResetCounter;
    shotsone.innerHTML=0;
    shotstwo.innerHTML=0;
    goalsone.innerHTML=0;
    goalstwo.innerHTML=0;
})

teamonesb = document.getElementById("teamone-shoot-button")
teamonesb.addEventListener("click", function() {
    
    console.log("+ shootButton")

shotsone = document.getElementById("teamone-numshots")
shotsone.innerHTML = Number(shotsone.innerHTML) + 1;

if (Math.random() > .5) {

goalsone = document.getElementById("teamone-numgoals")
goalsone.innerHTML = Number(goalsone.innerHTML) + 1;
}
})

teamtwosb = document.getElementById("teamtwo-shoot-button")
teamtwosb.addEventListener("click", function() {
    
    console.log("+ shootButtontwo")

shotstwo = document.getElementById("teamtwo-numshots")
shotstwo.innerHTML = Number(shotstwo.innerHTML) + 1;

if (Math.random() > .5) {

goalstwo = document.getElementById("teamtwo-numgoals")
goalstwo.innerHTML = Number(goalstwo.innerHTML) + 1;
}
})

let someOutput = prompt('Welcome to The Game! What is your name?')
let someOutputt = prompt ('...And who are you, Player 2?')
