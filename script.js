"use strict";

const btns = document.querySelectorAll(".box__btn-box");
const result = document.querySelector(".box__resultDisplay");
const playerScores = document.querySelector(".box__scoreDisplay--player p");
const botScores = document.querySelector(".box__scoreDisplay--bot p");
const player = document.querySelector(".box__players--player");
const bot = document.querySelector(".box__players--bot");
const resetBtn = document.querySelector(".box__reset");
const gameItem = ["rock", "paper", "scissor"];

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const playerSelect = e.target.id;
    player.textContent = playerSelect;
    generateBotNumber(playerSelect);
  });
});
function generateBotNumber(player) {
  const botNumber = Math.trunc(Math.random() * 3);
  const botScore = gameItem[botNumber];
  bot.textContent = botScore;
  if (player === botScore) {
    result.textContent = "You got drow";
    result.style.color = "#4DD01E";
  } else if (player === "rock" && botScore === "scissor") {
    result.textContent = "You Win";
    result.style.color = "#E1FF9B";
    playerScores.textContent++;
  } else if (player === "rock" && botScore === "paper") {
    result.textContent = "You Lose";
    result.style.color = "#C93F1C";
    botScores.textContent++;
  } else if (player === "paper" && botScore === "rock") {
    result.textContent = "You Win";
    result.style.color = "#E1FF9B";
    playerScores.textContent++;
  } else if (player === "paper" && botScore === "scissor") {
    result.textContent = "You Lose";
    result.style.color = "#C93F1C";
    botScores.textContent++;
  } else if (player === "scissor" && botScore === "paper") {
    result.textContent = "You Win";
    result.style.color = "#E1FF9B";
    playerScores.textContent++;
  } else if (player === "scissor" && botScore === "rock") {
    result.textContent = "You Lose";
    result.style.color = "#C93F1C";
    botScores.textContent++;
  }
}
resetBtn.addEventListener("click",()=>{
  playerScores.textContent = 0;
  botScores.textContent = 0;
  result.textContent = "Let's enjoy the game";
  player.textContent = "You";
  bot.textContent = "Bot"
})