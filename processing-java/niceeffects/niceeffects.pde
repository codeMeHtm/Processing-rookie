Ball ball;
void setup() {
  size(600, 400);
  ball = new Ball();
  background(0);
}

void draw() {
  ball.display();
  ball.move();
  // ball.bounce();
}

void mousePressed() {
  background(0);
}