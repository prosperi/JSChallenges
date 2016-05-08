var output = document.getElementsByTagName("code")[0];


////////// Challenge 1
var arg = 7;
var pyramid = "";
for(var i = 0; i < arg; i++){
  for(var j = 0; j < arg; j++){
    (j < arg-i-1) ? pyramid += "&nbsp;" : pyramid += "*";
  }
  pyramid += "<br/>";
}
pyramid += "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br/><br/>";

output.innerHTML += pyramid;

///////// Challenge 2
for(var i = 0; i < 100; i++){
  if(i%3==0 && i%5==0) console.log("FizzBuzz");
  else if(i%3==0) console.log("Fizz");
  else if(i%5==0) console.log("Buzz");
}

///////// Challenge 3
var size = 8;
var board = "";

for(var i = 0; i < size; i++){
  for(var j = 0; j< size; j++){
    if(i%2==0){
      (j%2==0) ? board += "#" : board += "&nbsp;";
    }else{
      (j%2==0) ? board += "&nbsp;" : board += "#";
    }
  }
  board += "<br/>";
}
board += "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ <br/><br/>";

output.innerHTML += board;
