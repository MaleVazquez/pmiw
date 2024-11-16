let juego;


function setup() {
  createCanvas(650, 480);
  juego = new Juego();
  iniciarJuego();
}


function draw() {
  juego.dibujar();
}

function keyPressed() {
  juego.keyPressed();
}

function keyReleased() {
  juego.keyReleased();
}

function iniciarJuego() {
  frameRate(60);
}
