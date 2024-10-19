function dibujarTexto(tamano, anchoMaximo, pantallaNum) {
  textSize(tamano);
  fill(255); 
  let yPos = 50;  // Posición vertical inicial para el texto

  
  let textoActual = textos[pantallaNum];
  let palabras = split(textoActual, ' '); // Dividir el texto en palabras

  let linea = ''; 

  for (let i = 0; i < palabras.length; i++) {
    let prueba = linea + palabras[i] + ' '; 

    if (textWidth(prueba) > anchoMaximo) {
      
      text(linea, width / 2, yPos);
      linea = palabras[i] + ' '; // Comienza una nueva línea
      yPos += tamano + 5; // Ajustar la posición para la siguiente línea
    } else {
      linea = prueba; // Actualiza la línea actual
    }
  }

  
  if (linea !== '') {
    text(linea, width / 2, yPos);
  }
}
