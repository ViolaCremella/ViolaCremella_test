//car going across screen animation, inspired by KA

var wheelSize = 24;

noStroke();

//position of the car

var x = 10;

draw = function() {
  //note: all lines of code here will run repeatedly
  background(0, 187, 255);

  //car body
  fill(187, 0, 255);
  rect(x, 100, 200, 20);
  rect(x + 15, 178, 70, 40);

  //car wheels
  fill(0, 0, 0);
  elipse(x + 25, 221, wheelSize, wheelSize);
  elipse(x + 75, 221, wheelSize, wheelSize);

  x = x + 10;
};

//yes, almost every line of code is the same to the one on KA
