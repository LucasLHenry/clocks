function digitalClock() {
  fill(255);
  stroke(255);
  angleMode(DEGREES);
  colorMode(RGB);
  strokeWeight(1);
  let hou = hour();
  let min = minute();
  let sec = second();
  //method one! just having text. Pretty simple
  var minp, secp;
  if (min.toString().length === 1) {
    min = '0' + min.toString();
  }
  if (sec.toString().length === 1) {
    sec = '0' + sec.toString();
  }
  if (hou > 12) {
    sec = sec.toString() + ' pm';
  } else {
    sec = sec.toString() + ' am';
  }
  text((hou%12).toString() + ':' + min + ':' + sec, width/2, height/2);
}