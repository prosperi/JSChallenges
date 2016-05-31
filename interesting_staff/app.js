///// Pythagorean Numbers
function pyths(hyp){
  for(var i = 4; i <= hyp; i++){
    for(var j = 3; j<i; j++){
      var angle = Math.asin(j/i);
      var leg = Math.cos(angle)*i;
      if(leg%1==0 && (j*j+leg*leg)==i*i)
        console.log([j,leg,i]);
    }
  }
}


pyths(10);

/////  UL LI
var ul = document.getElementsByTagName("ul")[0];
console.log(ul.childNodes);

function makeColored(num){
  Array.prototype.forEach.call(ul.childNodes, function(value){
    console.log(value);
    if(value.nodeType < 3 && Number(value.textContent) < num) value.style.color = "#FF0000";
  });
}

makeColored(5);
