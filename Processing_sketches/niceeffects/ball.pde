class Ball {
  PVector location;
  PVector velocity;
  PVector acceleration;
  float tx = 0;
  float ty = 0;
  
  Ball() {
    location = new PVector(random(0,width),random(0,height));
    velocity = new PVector(0,0);
    acceleration = new PVector(0,0);
  }
  
  void move() {
    PVector mouse = new PVector(random(0,width),random(0,height));
    mouse.sub(location);
    mouse.setMag(0.5);
    acceleration = mouse;
    
    velocity.add(acceleration);
    location.add(velocity);
    velocity.limit(10);
  }
  void bounce() {
    if(location.x > width)   location.x = 0;
    if(location.x < 0)       location.y = width;
    if(location.y > height)  location.y = 0;
    if(location.y < 0)       location.y = height;
  }
  void display() {
    stroke(255);
    strokeWeight(2);
    point(location.x,location.y);
  }
}