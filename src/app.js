/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = [" ate", " peed", " crushed", " broke"];
let what = [" my homework", " the keys", " the car"];
let when = [
  " before the class",
  " right on time",
  " when I finished",
  " during my lunch",
  " while I was praying"
];

window.onload = function() {
  //write your code here

  let salida = document.getElementById("excuse");

  console.log("Hello Rigo from the console!");
  return (salida.textContent =
    who[Math.floor(Math.random() * 3)] +
    action[Math.floor(Math.random() * 3)] +
    what[Math.floor(Math.random() * 3)] +
    when[Math.floor(Math.random() * 3)]);
};
