'use strict';
//Selecting ID by querselector
const score0P1 = document.querySelector("#score--0");
//select ID by getelement
const score1P2 = document.getElementById("score--1");
const diceImg = document.querySelector(".dice");
score0P1.textContent = 0;
score1P2.textContent = 0;
//Hidding dice image
diceImg.classList.add('hidden');