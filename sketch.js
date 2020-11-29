let ps;
let repeller;
//Now i just want to implement a change o color when the particles decrease and touch the repeller.
function setup() {
  createCanvas(600, 400);
  ps = new ParticleSystem(createVector(width/2, 50));
  repeller = new Repeller(width/2, height/2);
}

function draw() {
  background(51);
  ps.addParticle(mouseX, mouseY);
  
  //I might add a wind force to.
  if(mouseIsPressed) {
    let wind = createVector(0.5, 0);
    ps.applyForce(wind);
  } else {
      let gravity = createVector(0, 0.02);
      ps.applyForce(gravity);
  }
  
  ps.applyRepeller(repeller);
  
  repeller.display();
  ps.run();
  
}
