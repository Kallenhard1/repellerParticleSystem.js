class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255;
  }
  
  run() {
    this.display();
    this.update();
  }
  
  applyForce(f) {
    this.acceleration.add(f);
  }
  
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    
    this.velocity.limit(5);
  }
  
  display() {
    stroke(255, this.lifespan);
    strokeWeight(2);
    fill(255, this.lifespan, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }
  
  isDead() {
    if(this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }
}
