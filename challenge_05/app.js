var OUTPUT = document.getElementsByTagName("code")[0];

// challenge 01

function Vector(x, y){
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector){
  return { x: this.x + vector.x,
           y: this.y + vector.y };
}

Vector.prototype.minus = function(vector){
  return { x: this.x - vector.x,
           y: this.y - vector.y };
}

Vector.prototype.length = function(){
  return Math.sqrt(this.x * this.x + this.y * this.y);
}

var foo = new Vector(1,1);
var boo = new Vector(2,4);

console.log(foo.length());
