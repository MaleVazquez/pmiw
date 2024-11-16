function dibujarTexto(tamano, anchoMaximo, pantallaNum) {
  textSize(tamano);
  fill(255);
  textAlign(CENTER, TOP); // Centra el texto horizontalmente, pero lo alinea al principio de la posición vertical

  let yPos = 50;  // Posición vertical inicial
  let textoActual = textos[pantallaNum];  // Obtener el texto para la pantalla actual

  // Dibuja el texto directamente con ajuste automático
  text(textoActual, width / 2 - anchoMaximo / 2, yPos, anchoMaximo, height - yPos);
}
