class Repeller {
  constructor(x, y) {
    this.power = 150;
    this.position = createVector(x, y);
  }
  
  repel(p) {
    let dir = p5.Vector.sub(this.position, p.position);
    let d = dir.mag();
    dir.normalize();
    d = constrain(d, 1, 100);
    let force = -1*this.power/(d*d);
    dir.mult(force);
    return dir;
  }
  
    display() {
    stroke(255);
    strokeWeight(2);
    fill(100);
    ellipse(this.position.x, this.position.y, 32, 32);
  }
  
}
