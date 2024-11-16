class Proyectil {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.velocidad = 1;
    this.ancho = 70;
    this.alto = 70;
    this.imagen = loadImage("assets/proyectil.png")
  }

  mostrar() {
    fill(0, 0, 255);
    image(this.imagen, this.x - this.ancho / 2, this.y - this.alto / 2, this.ancho, this.alto);
  }

  caer() {
    this.y += this.velocidad;

    if (this.y > height + this.alto / 4) {
      this.y = 0;
      this.x = random(width);
    }
  }

  reposicionar() {
    this.x = random(width);
    this.y = 0;
  }
}
