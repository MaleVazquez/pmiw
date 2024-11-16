class Personaje {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.ancho = 90;
    this.alto = 90;
    this.imagen = loadImage("assets/edwin.png");
  }

  mostrar() {
    fill(0);
    image(this.imagen, this.x - this.ancho / 2, this.y - this.alto / 2, this.ancho, this.alto);
  }

  mover() {
    // Verificar si el personaje puede moverse a la izquierda
    if (keyIsDown(LEFT_ARROW) && this.x - this.ancho / 4 > 0) {
      this.x -= 2;  // Mover a la izquierda
    }

    // Verificar si el personaje puede moverse a la derecha
    if (keyIsDown(RIGHT_ARROW) && this.x + this.ancho / 4 < width) {
      this.x += 2;  // Mover a la derecha
    }

    // Verificar si el personaje puede moverse hacia arriba
    if (keyIsDown(UP_ARROW) && this.y - this.alto / 4 > 0) {
      this.y -= 2;  // Mover hacia arriba
    }

    // Verificar si el personaje puede moverse hacia abajo
    if (keyIsDown(DOWN_ARROW) && this.y + this.alto / 4 < height) {
      this.y += 2;  // Mover hacia abajo
    }
  }

  colision(objeto) {
    let distancia = dist(this.x, this.y, objeto.x, objeto.y);
    return distancia < this.ancho / 2 + objeto.ancho / 2 && this.y > objeto.y - objeto.alto / 2;
  }
}
