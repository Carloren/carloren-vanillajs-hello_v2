import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['el gato', 'Perro Sanxe', 'Ayuso', 'Eren Jaeger', 'tu madre'];
let action = ['se comió', 'robó', 'se cargó', 'prendió fuego a'];
let what = ['mis deberes', 'mi ordenador', 'mi móvil', 'mi casa', 'mi corazón'];
let when = ['hace diez siglos', 'mientras dormía', 'hace cero coma', 'mientras veía el betis', 'cuando me fui a japón'];

function excuseGen() {
  //write your code here

  let phrase = [who, action, what, when]

  let excuse = "Siento no poder ayudarte, pero ";

  phrase.map(arr => {
    (phrase.indexOf(arr) == phrase.length - 1) ?
      excuse += `${arr[Math.floor(Math.random() * arr.length)]}.`
      :
      excuse += `${arr[Math.floor(Math.random() * arr.length)]} `
  })

  document.getElementById("excuse").innerHTML = excuse;

  console.log("Hello Rigo from the console!");
};
window.onload = excuseGen;
document.getElementById("button").onclick = excuseGen;