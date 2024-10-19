let fondo = [];
let sonidoFondo;  // Variable para almacenar el sonido
let pantallaTotal = 17; 
let pantallaActual = 0;
let botonEnY, ancho, alto;
let puedeCambiar = true; 
let textos = [];  // Arreglo para almacenar los textos
let opacidad = 0;  // Para el fade
let Mifuente;

function preload() {
  // Cargar imágenes
  for (let i = 0; i < pantallaTotal; i++) {
    fondo[i] = loadImage(`assets/fondos/${i}.jpg`);
  }
  
  Mifuente = loadFont(`assets/fuentes/batmfa__.ttf`);
  
  // Cargar el archivo de sonido MP3
  sonidoFondo = loadSound(`assets/music/relaxing-guitar-loop-v5-245859.mp3`);  // Ruta del archivo de sonido
  
  // Cargar los textos desde el archivo
  textos = loadStrings(`assets/texto.txt`);  // Asegúrate de que la ruta es correcta
}

function setup() {
  createCanvas(640, 480);
  botonEnY = 400;
  ancho = 160;
  alto = 40;

  // Redimensionar imágenes
  for (let img of fondo) {
    img.resize(width, height);
  }

  // No iniciar el sonido automáticamente, se iniciará tras una interacción
}

function draw() {
  cargarFondo(pantallaActual);
  textAlign(CENTER);
  
  textFont(Mifuente);
  
  // Ajustar el tamaño del texto
  
  let tamanoTexto = 18; // Tamaño del texto
  let anchoMaximo = width - 40; // Ancho máximo del texto, deja margen

  // Dibujar el texto del archivo en la pantalla actual
  dibujarTexto(tamanoTexto, anchoMaximo, pantallaActual);
  
  // Dibujar botones
  cargarBotones(pantallaActual);
  
  // Aplicar el efecto de fade
  if (opacidad < 255) {
    fill(0, 0, 0, 255 - opacidad);
    rect(0, 0, width, height);
    opacidad += 5;  // Incremento de opacidad para el fade
  }
}
