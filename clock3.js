function colorClock() {
  colorMode(HSB);
  angleMode(RADIANS);
  noStroke();
   
  fill(round(map(hour(), 0, 12, 0, 360)), 100, 100);
  if (round(map(hour(), 0, 12, 0, 360)) > 180) {
    stroke(0);
    strokeWeight(3);
  } else {
    noStroke();
  }
  var a = 50/Math.cos(Math.PI/6);
  ellipse(width/2, height/2 - a, 30, 30);
  
  fill(round(map(minute(), 0, 60, 0, 360)), 100, 100);
  if (round(map(minute(), 0, 60, 0, 360)) > 180) {
    stroke(0);
    strokeWeight(3);
  } else {
      noStroke();
  }
  var b = 50*Math.tan(Math.PI/6);
  ellipse(width/2 + 50, height/2 + b, 30, 30);
  
  fill(round(map(second(), 0, 60, 0, 360)), 100, 100);
  if (round(map(second(), 0, 60, 0, 360)) > 180) {
    stroke(255);
    strokeWeight(3);
  } else {
    noStroke();
  }
  ellipse(width/2 - 50, height/2 + b, 30, 30);
}