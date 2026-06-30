let x = 50;

function setup() {
  let canvas = createCanvas(windowWidth, 150);
  canvas.position(0, 0);
  canvas.style('pointer-events', 'none');
}

function draw() {
  clear();

  fill(34,139,34);
  noStroke();

  ellipse(x,75,25,25);

  x += 2;

  if(x > width){
    x = 0;
  }
}
