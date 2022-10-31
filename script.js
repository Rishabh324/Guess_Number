'use strict';

var randomNumber = Math.trunc(Math.random()*20)+1;
var points = 20;
var highscore = 0;

document.querySelector(".check").addEventListener("click", function(){
  var number = Number(document.querySelector(".guess").value);
  if(number === randomNumber){
    document.querySelector(".message").textContent = "Correct Answer!!";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if(points >highscore){
      highscore = points;
      document.querySelector(".highscore").textContent = highscore;
    }
  }else if(number > 20){
    document.querySelector(".message").textContent = "Invalid Input...";
  }else if(number !== randomNumber){
    if(points>1){
      document.querySelector(".message").textContent = number > randomNumber ? "Too high..." : "Too Low...";
      points--;
      document.querySelector(".score").textContent = points;
    }else{
      document.querySelector(".message").textContent = "You lose...";
      document.querySelector(".score").textContent = points;
    }
  }
});

document.querySelector(".again").addEventListener("click", function(){
  points = 20;
  randomNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = points;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = ' ';
  document.querySelector("body").style.backgroundColor = "#222";
})
