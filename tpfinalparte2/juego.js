class Juego {
  constructor() {
    this.personaje = new Personaje();
    this.personajeRescatado = new PersonajeRescatado();
    this.proyectiles = [];
    this.puntuacion = 0;
    this.vidas = 5;
    this.estadoJuego = "inicio"; // Estado inicial
    this.pantallas = new Pantallas();
    this.miAudio = loadSound('assets/Again.mp3'); // Carga el audio una vez

    // Crear proyectiles
    for (let i = 0; i < 5; i++) {
      this.proyectiles.push(new Proyectil());
    }
  }

  // Método para mostrar y actualizar la pantalla del juego
  dibujar() {
    if (this.estadoJuego === "inicio") {
      this.pantallas.mostrarInicio();
    } else if (this.estadoJuego === "jugando") {
      this.actualizar();
      this.pantallas.mostrarJuego(this);
    } else if (this.estadoJuego === "ganaste") {
      this.pantallas.mostrarGanaste();
    } else if (this.estadoJuego === "perdiste") {
      this.pantallas.mostrarPerdiste();
    } else if (this.estadoJuego === "creditos") {
      this.pantallas.mostrarCreditos();
    }
  }

  // Método para actualizar el estado del juego
  actualizar() {
    this.personaje.mostrar();
    this.personaje.mover();

    if (this.personaje.colision(this.personajeRescatado)) {
      this.estadoJuego = "ganaste";
      return;
    }

    for (let proyectil of this.proyectiles) {
      proyectil.mostrar();
      proyectil.caer();
      if (this.personaje.colision(proyectil)) {
        proyectil.reposicionar();
        this.vidas--;
        if (this.vidas === 0) {
          this.estadoJuego = "perdiste";
        }
      }
    }
  }

  // Método para reiniciar el juego
  reiniciarJuego() {
    this.puntuacion = 0;
    this.vidas = 5;
    this.estadoJuego = 'inicio'; // Cambia el estado a 'inicio'

    // Reinicia las posiciones de los proyectiles
    for (let proyectil of this.proyectiles) {
      proyectil.reposicionar();
    }

    // Posiciona el personaje en su posición inicial
    this.personaje.x = width / 2;
    this.personaje.y = height - 50;
    
  }

  // Método para manejar las teclas presionadas
  keyPressed() {
    if (key === 'r' || key === 'R') {
      if (this.estadoJuego === 'ganaste' || this.estadoJuego === 'perdiste' || this.estadoJuego === 'creditos') {
        this.reiniciarJuego();
      }
    } else if (key === 'c' || key === 'C') {
      if (this.estadoJuego === 'ganaste' || this.estadoJuego === 'perdiste') {
        this.estadoJuego = 'creditos';
      }
    } else if (key === ' ' && this.estadoJuego === 'inicio') {
      this.estadoJuego = 'jugando';

      // Reproduce la música desde el principio si no está en reproducción
      if (!this.miAudio.isPlaying()) {
        this.miAudio.play(); // Reproducción normal, no en bucle
      }
    }
  }
}
