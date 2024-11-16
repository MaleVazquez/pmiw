function cargarFondo(pantallaNum) {
  image(fondo[pantallaNum], 0, 0);
}


function cargarBotones(pantallaNum) {
  if (pantallaNum === 0) {
    // Pantalla de inicio (FULL METAL ALCHEMIST)
    crearBoton(width / 2 - ancho / 2, botonEnY, "INICIO", 1);
  } else if (pantallaNum === 1) {
    // Pantalla de descripción narrativa
    crearBoton(width / 2 - ancho / 2, botonEnY, "CONTINUAR", 2);
  } else if (pantallaNum === 2) {
    // Llegada a la central
    crearBoton(width / 2 - ancho / 2, botonEnY, "CONTINUAR", 3);
  } else if (pantallaNum === 3) {
    // Encuentro con el enemigo misterioso (decidir luchar o negociar)
    crearBoton(width / 4 - ancho / 2, botonEnY, "BATALLA", 4);
    crearBoton(3 * width / 4 - ancho / 2, botonEnY, "NEGOCIAR", 5);
  } else if (pantallaNum === 4) {
    // Decidir entre defenderse o atacar
    crearBoton(width / 4 - ancho / 2, botonEnY, "DEFENDERSE", 7);
    crearBoton(3 * width / 4 - ancho / 2, botonEnY, "ATACAR", 9);
  } else if (pantallaNum === 5) {
    // Decidir entre aceptar la alianza o rechazarla
    crearBoton(width / 4 - ancho / 2, botonEnY, "ALIANZA", 6);
    crearBoton(3 * width / 4 - ancho / 2, botonEnY, "RECHAZAR", 8);
  } else if (pantallaNum === 6) {
    // Resultado de aceptar la alianza
    crearBoton(width / 2 - ancho / 2, botonEnY, "CONTINUAR", 10);
  } else if (pantallaNum === 7) {
    // Resultado de defenderse en la batalla
    crearBoton(width / 2 - ancho / 2, botonEnY, "CONTINUAR", 11);
  } else if (pantallaNum === 8) {
    // El enemigo ataca (resultado de rechazar la alianza)
    crearBoton(width / 2 - ancho / 2, botonEnY, "CONTINUAR", 13);
  } else if (pantallaNum === 9) {
    // Resultado de atacar sin cuidado
    crearBoton(width / 2 - ancho / 2, botonEnY, "CONTINUAR", 14);
  } else if (pantallaNum === 10) {
    // Laboratorio escondido
    crearBoton(width / 2 - ancho / 2, botonEnY, "CONTINUAR", 12);
  } else if (pantallaNum === 11) {
    // Situación grave
    crearBoton(width / 2 - ancho / 2, botonEnY, "CONTINUAR", 15);
  } else if (pantallaNum === 12) {
    // Final 2 (escapan y pierden algo importante por siempre)
    crearBoton(width / 2 - ancho / 2, botonEnY, "VOLVER", 0);
    crearBoton(width / 2 - ancho / 2, botonEnY + 50, "CRÉDITOS", 16);  // Cambiado a Pantalla 16
  } else if (pantallaNum === 13) {
    // Final 1 (traición)
    crearBoton(width / 2 - ancho / 2, botonEnY, "VOLVER", 0);
    crearBoton(width / 2 - ancho / 2, botonEnY + 50, "CRÉDITOS", 16);  // Cambiado a Pantalla 16
  } else if (pantallaNum === 14) {
    // Final 4 (explotan el laboratorio y se genera un desastre)
    crearBoton(width / 2 - ancho / 2, botonEnY, "VOLVER", 0);
    crearBoton(width / 2 - ancho / 2, botonEnY + 50, "CRÉDITOS", 16);  // Cambiado a Pantalla 16
  } else if (pantallaNum === 15) {
    // Final 3 (victoria, pero el mundo queda dañado)
    crearBoton(width / 2 - ancho / 2, botonEnY, "VOLVER", 0);
    crearBoton(width / 2 - ancho / 2, botonEnY + 50, "CRÉDITOS", 16);  // Cambiado a Pantalla 16
  } else if (pantallaNum === 16) {
    // Pantalla de créditos (Pantalla 16)
    fill(255);
    textSize(20);
    textAlign(CENTER);  // Centra el texto horizontalmente
    
    // Mostrar cada nombre por separado
    text("Hiromu Arakawa", width / 2, height / 2 - 40);  // Muestra el primer nombre más arriba
    text("Vazquez Leonela Malena", width / 2, height / 2);      // Muestra el segundo nombre en el centro
    text("Vazquez Leandro Nicolas", width / 2, height / 2 + 40);          // Muestra Hiromu más abajo
    crearBoton(width / 2 - ancho / 2, botonEnY, "VOLVER", 0);
  }
}
