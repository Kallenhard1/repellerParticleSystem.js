class ParticleSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }
  
  addParticle(x, y) {
    if(x !== undefined && y !== undefined) {
      this.particles.push(new Particle(x, y));
    } else {
      this.particles.push(new Particle(this.origin.x, this.origin.y));
    }
  }
  
  run() {
    for(let particle of this.particles) {
      particle.run();
    }
    
    this.particles = this.particles.filter(particle => !particle.isDead());
  }
  
  applyForce(f) {
    for(let particle of this.particles) {
      particle.applyForce(f);
    }
  }
  
  applyRepeller(r) {
    for(let particle of this.particles) {
      let force = r.repel(particle);
      particle.applyForce(force);
    }
  }
  
}
