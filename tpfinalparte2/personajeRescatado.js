class PersonajeRescatado {
  constructor() {
    this.x = 550;  // Coordenada x para la esquina superior
    this.y = 85;  // Coordenada y para la esquina superior
    this.ancho = 90;
    this.alto = 90;
    this.imagen = loadImage("assets/alphonse.png");  // Verifica que la ruta de la imagen esté correcta
  }

  mostrar() {
    // Verifica que la imagen esté cargada antes de dibujarla
    if (this.imagen) {
      image(this.imagen, this.x - this.ancho / 2, this.y - this.alto / 2, this.ancho, this.alto);
    } else {
      fill(255, 0, 0);  // Color de relleno rojo en caso de que no se cargue la imagen
      rect(this.x - this.ancho / 2, this.y - this.alto / 2, this.ancho, this.alto);  // Dibuja un rectángulo si la imagen no se carga
    }
  }
}
