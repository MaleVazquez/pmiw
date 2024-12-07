class Pantallas {
  constructor() {
    this.pantallaInicio = loadImage("assets/Inicio.jpg");
    this.pantallaGanaste = loadImage("assets/winner.jpg");
    this.pantallaPerdiste = loadImage("assets/loser.jpg");
    this.pantallaJugando = loadImage("assets/fondo.jpeg");
    this.pantallaCreditos = loadImage("assets/creditos.jpg");
    this.fuente = loadFont("assets/procircuit.ttf");
  }

  mostrarInicio() {
    image(this.pantallaInicio, 0, 0, width, height);
    fill(255);
    textSize(30);
    textFont(this.fuente);
    textAlign(CENTER, CENTER);
    text("¡HAN ATRAPADO A TU HERMANO!", width / 2, 120);
    text("\n Para salvarlo esquiva los proyectiles y llega hacia el. \n MUEVETE CON LAS LETRAS, A,W,S,D", width / 2, 230);
    text("Presione espacio para comenzar", width / 2, 350);
  }

  mostrarJuego(juego) {
    image(this.pantallaJugando, 0, 0, width, height);
    juego.personaje.mostrar();
    juego.personajeRescatado.mostrar();
    for (let proyectil of juego.proyectiles) {
      proyectil.mostrar();
    }
    fill(225);
    textSize(25);
    text(`Puntuacion: ${juego.puntuacion}`, 60, 30);
    text(`Vidas: ${juego.vidas}`, width - 400, 30);
  }

  mostrarGanaste() {
    image(this.pantallaGanaste, 0, 0, width, height);
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("¡FELICITACIONES HAS GANADO!", width / 2, height / 2);
    textSize(20);
    text("Presiona la tecla 'R' para reiniciar o la tecla 'C' para ver los creditos", width / 2, height / 2 + 50);
  }

  mostrarPerdiste() {
    image(this.pantallaPerdiste, 0, 0, width, height);
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("¡HAS PERDIDO!", width / 2, height / 2);
    textSize(20);
    text("Presiona la tecla 'R' para reiniciar o la tecla 'C' para ver los créditos", width / 2, height / 2 + 50);
  }

  mostrarCreditos() {
    image(this.pantallaCreditos, 0, 0, width, height);
    fill(255);
    textSize(35);
    textAlign(CENTER, CENTER);
    text("¡MUCHAS GRACIAS POR JUGAR! ", width / 2, 120);
    text("Leonela Malena Vazquez ", width / 2, height / 2 - 50);
    text("Leandro Nicolas Vazquez ", width / 2, 250);
    textSize(25);
    text("Presiona 'R' para volver a jugar", width / 2, height / 2 + 50);
  }
}
