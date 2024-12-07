class PersonajeRescatado {
  constructor() {
    this.x = 550;
    this.y = 50;
    this.ancho = 90;
    this.alto = 90;
    this.imagen = loadImage("assets/alphonse.png");
  }

  mostrar() {
    image(this.imagen, this.x - this.ancho / 2, this.y - this.alto / 2, this.ancho, this.alto);
  }
}
