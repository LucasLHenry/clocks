var clockSettings = 3;
var currentClock = 1;
var paragraph;

function setup() {
  createCanvas(400, 400);
  paragraph = createP();
  frameRate(2);
}

function draw() {
  background(0);
  switch (currentClock) {
    case 1:
      digitalClock();
      paragraph.html('The digital clock is really simple. It says the time.');
      break;
    case 2:
      arcClock();
      paragraph.html('the arc clock is like an analog clock (the one with hands) except it shows the arcs that the hands would trace instead of the hands themselves. The red arc is hours, the green one is minutes, and the blue one is seconds.');
      break;
    case 3:
      colorClock();
      paragraph.html('This is definitely one of the weirdest ones. The three orbs represent hours, minutes, and seconds; clockwise from top. The color of the orb is the time. If it is red without an outline, then the orb has just started its cycle, and would be at the top of the clock in normal analog. If its all the way red with an outline, then its just ending. ');
      break;
    default:
      paragraph.html('well, something has gone wrong. Hm');
  }
}

function toggle() {
  if (currentClock < clockSettings) {
    currentClock++;
  } else {
    currentClock = 1;
  }
}