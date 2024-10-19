function crearBoton(x, y, texto, siguientePantalla) {
  let botonbrillo = mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto; // Detectar si el mouse está sobre el botón

  if (botonbrillo) {
    fill(200); // Color al pasar el mouse
  } else {
    fill(255); // Color normal
  }

  rect(x, y, ancho, alto, 5); // Crear el botón
  
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2); // Dibujar texto del botón

  if (mouseIsPressed && puedeCambiar && botonbrillo) {
    pantallaActual = siguientePantalla;  // Cambiar a la siguiente pantalla
    puedeCambiar = false; // 
    opacidad = 0; // Reiniciar opacidad para el fade

    // Iniciar el sonido al hacer clic en el botón de inicio 
    if (!sonidoFondo.isPlaying()) {
      sonidoFondo.loop();  // El sonido en bucle
    }
  } else if (!mouseIsPressed) {
    puedeCambiar = true; // Rehabilitar el cambio
  }
}
