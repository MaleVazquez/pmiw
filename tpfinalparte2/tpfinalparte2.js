let juego;


function preload() {
  miAudio = loadSound('assets/again.mp3');
}

function setup() {
  createCanvas(650, 480);
  juego = new Juego();
  iniciarJuego();
   miAudio.loop();
}

function draw() {
  juego.dibujar();
}

function keyPressed() {
  juego.keyPressed();
  audio.tecla(key);
}

function keyReleased() {
  juego.keyReleased();
}

function iniciarJuego() {
  frameRate(60);
}
