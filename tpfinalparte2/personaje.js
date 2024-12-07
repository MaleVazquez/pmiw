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
    
    if (keyIsDown(65) && this.x - this.ancho / 4 > 0) {  
        this.x -= 2;  //izquierda
    }

    
    if (keyIsDown(68) && this.x + this.ancho / 4 < width) {  
        this.x += 2;  //derecha
    }

    
    if (keyIsDown(87) && this.y - this.alto / 4 > 0) {  
        this.y -= 2;  //arriba
    }

    
    if (keyIsDown(83) && this.y + this.alto / 4 < height) {  
        this.y += 2;  //abajo
    }
}


  colision(objeto) {
    let distancia = dist(this.x, this.y, objeto.x, objeto.y);
    return distancia < this.ancho / 2 + objeto.ancho / 2 && this.y > objeto.y - objeto.alto / 2;
  }
}
