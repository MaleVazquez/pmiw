//Leonela Malena Vazquez
//LINK al video: https://www.youtube.com/watch?v=cLo-kGhVJQc


let Ncuadrados = 13; // Número de cuadrados
let maxSize;
let cuadra;
let rotacion = 0; // Ángulo de rotación inicial
let activar = false;
let negro, blanco;
let rotacionInicial;

function preload() {
  cuadra = loadImage("assets/cuadrado.jpg"); // Asegúrate de que el nombre del archivo sea correcto
}
function setup() {
  createCanvas(800, 400); // Resolución de 800x400
  maxSize = width / 3.5; // Ajustar el tamaño del cuadrado más grande para la grilla
  negro = color(0);
  blanco = color(255);
  rotacionInicial = QUARTER_PI / 4; // Rotación inicial de los cuadrados
}

function draw() {
  background(255);
  image(cuadra, 0, 0, 400, 400); 

  let gridCols = 2;
  let gridRows = 2;
  let gridWidth = width / 4;
  let gridHeight = height / 2;

  for (let col = 2; col < gridCols + 2; col++) { // Iniciamos en col = 2 para solo dibujar en la mitad derecha
    for (let row = 0; row < gridRows; row++) {
      push();
      translate(col * gridWidth + gridWidth / 2, row * gridHeight + gridHeight / 2); // Centra el origen de coordenadas en cada celda de la grilla
      if (activar) {
        let factorRotacion = map(mouseY, 0, height, 0, QUARTER_PI); // Factor de rotación basado en la posición vertical del mouse
        rotacion += factorRotacion; // Actualiza el ángulo de rotación
      }
      dibujarCuadrados();
      pop();
    }
  }
}

// Función propia con parámetros que NO retorna un valor
function dibujarCuadrados() {
  for (let i = 0; i < Ncuadrados; i++) { // Ciclo FOR para los cuadrados concéntricos
    fill(i % 2 === 0 ? blanco : negro);

    let size = calcularTamanoCuadrado(i); // Uso de función propia con retorno de valor
    push();
    if (!activar) {
      rotate(PI / 4 * i / Ncuadrados); // Rotar ligeramente cada cuadrado en el estado estático inicial
    } else {
      rotate(rotacionInicial + rotacion * i / Ncuadrados); // Aplica la rotación inicial y la rotación dinámica al cuadrado
    }
    rectMode(CENTER);
    noStroke();
    rect(0, 0, size, size);
    pop();
  }
}

// Función propia con parámetros que RETORNA un valor
function calcularTamanoCuadrado(indice) {
  return maxSize * (Ncuadrados - indice) / Ncuadrados;
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    reiniciarPrograma(); // Reiniciar el programa
  }
}

function mousePressed() {
  if (mouseX > width / 2 && mouseX < width && mouseY > 0 && mouseY < height) {
    activar = true; // Modificación de variables
    negro = color(random(0, 125)); // Funciones matemáticas: random()
    blanco = color(random(125, 255)); // Funciones matemáticas: random()
  }
}

function reiniciarPrograma() {
  activar = false;
  rotacion = 0;
  negro = color(0);
  blanco = color(255);
}
