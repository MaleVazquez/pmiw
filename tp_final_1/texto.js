function dibujarTexto(tamano, anchoMaximo, pantallaNum) {
  textSize(tamano);
  fill(255);  // Color del texto
  let yPos = 50;  // Posición vertical inicial para el texto

  // Obtener el texto de la pantalla actual
  let textoActual = textos[pantallaNum];
  let palabras = split(textoActual, ' '); // Dividir el texto en palabras

  let linea = ''; // Línea de texto actual

  for (let i = 0; i < palabras.length; i++) {
    let prueba = linea + palabras[i] + ' '; // Probar agregar la palabra

    if (textWidth(prueba) > anchoMaximo) {
      // Si excede el ancho máximo, dibuja la línea actual y comienza una nueva
      text(linea, width / 2, yPos);
      linea = palabras[i] + ' '; // Comienza una nueva línea
      yPos += tamano + 5; // Ajustar la posición para la siguiente línea
    } else {
      linea = prueba; // Actualiza la línea actual
    }
  }

  // Dibuja cualquier texto restante que no haya sido dibujado
  if (linea !== '') {
    text(linea, width / 2, yPos);
  }
}
