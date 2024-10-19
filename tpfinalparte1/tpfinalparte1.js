//Vazquez Leonela Malena
//Vazquez Leandro

//LINK AL VIDEO: https://www.youtube.com/watch?v=Ph-EMOZa-nw


let fondo = [];
let sonidoFondo;  // Variable para almacenar el sonido
let pantallaTotal = 17; 
let pantallaActual = 0;
let botonEnY, ancho, alto;
let puedeCambiar = true; 
let textos = []; 
let opacidad = 0;  
let Mifuente;

function preload() {
  // Cargar imágenes
  for (let i = 0; i < pantallaTotal; i++) {
    fondo[i] = loadImage(`assets/fondos/${i}.jpg`);
  }
  
  Mifuente = loadFont(`assets/fuentes/batmfa__.ttf`);
  
  // Cargar el archivo de sonido MP3
  sonidoFondo = loadSound(`assets/music/relaxing-guitar-loop-v5-245859.mp3`); 
  
  // Cargar los textos desde el archivo
  textos = loadStrings(`assets/texto.txt`);  
}

function setup() {
  createCanvas(640, 480);
  botonEnY = 400;
  ancho = 160;
  alto = 40;

  
  for (let img of fondo) {
    img.resize(width, height);
  }

  
}

function draw() {
  cargarFondo(pantallaActual);
  textAlign(CENTER);
  
  textFont(Mifuente);
  
  let tamanoTexto = 18; // Tamaño 
  let anchoMaximo = width - 40; // Ancho 

  // Dibujar el texto 
  dibujarTexto(tamanoTexto, anchoMaximo, pantallaActual);
  
  // Dibujar botones
  cargarBotones(pantallaActual);
  
  // efecto de fade
  if (opacidad < 255) {
    fill(0, 0, 0, 255 - opacidad);
    rect(0, 0, width, height);
    opacidad += 5;  // Incremento de opacidad para el fade
  }
} 
