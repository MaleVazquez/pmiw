class Juego {
  constructor() {
    this.personaje = new Personaje();
    this.personajeRescatado = new PersonajeRescatado()
    this.proyectiles = [];
    this.puntuacion = 0;
    this.vidas = 5;
    this.estadoJuego = 'inicio'; // Estado inicial

    // Crea 5 proyectiles
    for (let i = 0; i < 5; i++) {
      this.proyectiles.push(new Proyectil());
    }

    // Cargar imágenes
    this.pantallaInicio = loadImage("assets/Inicio.jpg");
    this.pantallaGanaste = loadImage("assets/win.jpg");
    this.pantallaPerdiste = loadImage("assets/loser.jpg");
    this.pantallaJugando = loadImage("assets/fondo.jpeg"); // Imagen para el estado 'jugando'
  }

  dibujar() {
    if (this.estadoJuego === 'inicio') {
      // Mostrar la pantalla de inicio
      image(this.pantallaInicio, 0, 0, width, height);
      fill(255);
      textSize(40);
      textAlign(CENTER, CENTER);
      text("Presione espacio para comenzar", width / 2, height / 2);
    } else if (this.estadoJuego === 'jugando') {
      this.actualizar();
      this.mostrarJuego();
    } else if (this.estadoJuego === 'ganaste') {
      this.mostrarGanaste();
    } else if (this.estadoJuego === 'perdiste') {
      this.mostrarPerdiste();
    }
  }

  actualizar() {
    // Dibujar y mover el personaje
    this.personaje.mostrar();
    this.personaje.mover();

    // Dibujar y mover los proyectiles
    for (let proyectil of this.proyectiles) {
      proyectil.mostrar();
      proyectil.caer();

      // Verificar colisiones con el personaje
      if (this.personaje.colision(proyectil)) {
        proyectil.reposicionar();
        this.vidas--;

        // Verificar si se quedó sin vidas
        if (this.vidas === 0) {
          this.estadoJuego = 'perdiste';
        }
      }
    }
  }

  mostrarJuego() {
    // Cambia el fondo al estado 'jugando'
    image(this.pantallaJugando, 0, 0, width, height);

    // Dibuja y muestra el personaje
    this.personaje.mostrar();
    this.personaje.mover();
    
    this.personajeRescatado.mostrar();

    // Dibujar y mostrar los proyectiles
    for (let proyectil of this.proyectiles) {
      proyectil.mostrar();
      proyectil.caer();

      // Verificar colisiones con el personaje
      if (this.personaje.colision(proyectil)) {
        proyectil.reposicionar();
        this.vidas--;

        // Verificar si se quedó sin vidas
        if (this.vidas === 0) {
          this.estadoJuego = 'perdiste';
        }
      }
    }

    // Muestra la barra superior con la puntuación y las vidas
    fill(0);
    textSize(20);
    text(`Puntuación: ${this.puntuacion}`, 60, 30);
    text(`Vidas: ${this.vidas}`, width - 400, 30);
  }

  mostrarGanaste() {
    // Muestra la pantalla de "Ganaste"
    image(this.pantallaGanaste, 0, 0, width, height);
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    stroke(5);
    text("¡Ganaste!", width / 2, height / 2);
    textSize(20);
    text("Presiona 'R' para reiniciar", width / 2, height / 2 + 50);
  }

  mostrarPerdiste() {
    // Muestra la pantalla de "Perdiste"
    image(this.pantallaPerdiste, 0, 0, width, height);
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    stroke(5);
    text("¡Perdiste!", width / 2, height / 2);
    textSize(20);
    text("Presiona 'R' para reiniciar", width / 2, height / 2 + 50);
  }

  reiniciarJuego() {
    this.puntuacion = 0;
    this.vidas = 5;
    this.estadoJuego = 'jugando';

    // Reinicia las posiciones de los proyectiles
    for (let proyectil of this.proyectiles) {
      proyectil.reposicionar();
    }
  }

  keyPressed() {
    // Lógica relacionada con la pulsación de teclas
    if (this.estadoJuego === 'ganaste') {
      if (key === 'r' || key === 'R') {
        // Reinicia el juego si se presiona la tecla 'R' en el estado 'ganaste'
        this.reiniciarJuego();
      }
    } else if (key === 'r' || key === 'R') {
      // Reinicia el juego si se presiona la tecla 'R' en cualquier otro estado
      this.reiniciarJuego();
    } else if (key === ' ' && this.estadoJuego === 'inicio') {
      // Comienza el juego si se presiona la tecla espacio en la pantalla de inicio
      this.estadoJuego = 'jugando';
    }
  }
}
