function arcClock() {
  angleMode(DEGREES);
  colorMode(RGB);
  translate(width/2, height/2);
  stroke(255, 0, 0);
  strokeWeight(4);
  noFill();
  rotate(-90);
  arc(0, 0, width/2 - 100, height/2 - 100, 0, map(hour(), 0, 12, 0, 360));
  stroke(0, 255, 0);
  arc(0, 0, width/2 - 50, height/2 - 50, 0, map(minute(), 0, 60, 0, 360));
  stroke(0, 0, 255);
  arc(0, 0, width/2 - 20, height/2 - 20, 0, map(second(), 0, 60, 0, 360));
}